<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $lessonId = $_GET['id'];

    require_once('dbConfig.php');

    $fetchQuizSql = "SELECT * FROM quiz WHERE lesson_id = '$lessonId'";
    $quizResult = $db->query($fetchQuizSql);
    if ($quizResult->num_rows === 1) {
        $quizData = $quizResult->fetch_assoc();
        $quizId = $quizData['id'];

        $fetchQuestionsSql = "SELECT * FROM questions WHERE quiz_id = '$quizId'";
        $questionsResult = $db->query($fetchQuestionsSql);

        while ($questionData = $questionsResult->fetch_assoc()) {
            $questionId = $questionData['id'];
            $questionText = $questionData['question_text'];

            $fetchOptionsSql = "SELECT * FROM options WHERE question_id = '$questionId'";
            $optionsResult = $db->query($fetchOptionsSql);
            $options = [];

            while ($optionData = $optionsResult->fetch_assoc()) {
                $optionText = $optionData['option_text'];
                $isAnswer = $optionData['is_answer'] === "1" ? "true" : "false";

                $options[] = array(
                    'text' => $optionText,
                    'is_answer' => $isAnswer
                );
            }

            $questions[] = array(
                'question' => $questionText,
                'options' => $options
            );
        }

        header('Content-Type: application/json');
        echo json_encode($questions);
    } else {
        echo "1";
    }

    $db->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = isset($_POST['id']) ? $_POST['id'] : null;
    $lesson = $_POST['lesson'];
    $lessonTitle = $lesson['title'];
    $lessonDescription = $lesson['description'];
    $videoURL = isset($lesson['videoUrl']) ? json_encode($lesson['videoUrl']) : null;
    $coverPic = $lesson['coverPic'];
    $lecturer = $lesson['lecturer'];
    $questions = $_POST['questions'];

    require_once('dbConfig.php');

    // Store the error message
    $error = "";

    if (empty($videoURL)) {
        $error = "Lesson video is required.";
    } elseif (empty($questions[0]['question'])) {
        $error = "At least one question is required.";
    } else {
        foreach ($questions as $index => $question) {
            $questionText = $question['question'];
            $options = $question['options'];

            if (empty($questionText)) {
                $errors[] = "Question " . ($index + 1) . " is required.";
                break;
            }

            $hasCorrectAnswer = false;
            foreach ($options as $optionIndex => $option) {
                $optionText = $option['text'];
                $isAnswer = $option['is_answer'] === "true";

                if (empty($optionText)) {
                    $error = "Option " . ($optionIndex + 1) . " of question " . ($index + 1) . " is required.";
                    break 2;
                }

                if ($isAnswer) {
                    $hasCorrectAnswer = true;
                }
            }

            if (!$hasCorrectAnswer) {
                $error = "Correct answer is required for question " . ($index+1) . ".";
                break;
            }
        }
    }

    if (empty($error)) {
        if ($id) {
            // Update existing lesson
            $updateQuery = "UPDATE lessons SET title = '$lessonTitle', description = '$lessonDescription', videoURL = '$videoURL', coverPic = '$coverPic', lecturer = '$lecturer' WHERE id = $id";

            if (!mysqli_query($db, $updateQuery)) {
                $error = "Error updating lesson: " . mysqli_error($db);
            }
        } else {
            // Insert new lesson
            $insertQuery = "INSERT INTO lessons (title, description, videoURL, coverPic, lecturer) VALUES ('$lessonTitle', '$lessonDescription', '$videoURL', '$coverPic', '$lecturer')";

            if (!mysqli_query($db, $insertQuery)) {
                $error = "Error inserting lesson: " . mysqli_error($db);
            } else {
                $id = mysqli_insert_id($db); // Retrieve the generated ID
            }
        }

        // Select quiz data for the lesson
        $quizQuery = "SELECT * FROM quiz WHERE lesson_id = $id";
        $quizResult = mysqli_query($db, $quizQuery);

        if (mysqli_num_rows($quizResult) === 0) {
            // Insert new quiz
            $insertQuizQuery = "INSERT INTO quiz (lesson_id) VALUES ($id)";

            if (!mysqli_query($db, $insertQuizQuery)) {
                $error = "Error inserting quiz: " . mysqli_error($db);
            } else {
                $quizId = mysqli_insert_id($db); // Retrieve the generated ID
            }
        } else {
            $quizRow = mysqli_fetch_assoc($quizResult);
            $quizId = $quizRow['id'];

            // Select questions for the quiz
            $questionsQuery = "SELECT * FROM questions WHERE quiz_id = $quizId";
            $questionsResult = mysqli_query($db, $questionsQuery);

            while ($questionsRow = mysqli_fetch_assoc($questionsResult)) {
                $questionId = $questionsRow['id'];

                // Delete options for each question
                $deleteOptionsQuery = "DELETE FROM options WHERE question_id = $questionId";
                if (!mysqli_query($db, $deleteOptionsQuery)) {
                    $error = "Error deleting options: " . mysqli_error($db);
                    break; // Stop the loop if an error occurs
                }
            }

            // Delete questions for the quiz
            $deleteQuestionsQuery = "DELETE FROM questions WHERE quiz_id = $quizId";
            if (!mysqli_query($db, $deleteQuestionsQuery)) {
                $error = "Error deleting questions: " . mysqli_error($db);
            }
        }

        // Insert questions and options for the quiz
        foreach ($questions as $question) {
            $questionText = $question['question'];
            $options = $question['options'];

            // Insert question
            $insertQuestionQuery = "INSERT INTO questions (quiz_id, question_text) VALUES ($quizId, '$questionText')";

            if (mysqli_query($db, $insertQuestionQuery)) {
                $questionId = mysqli_insert_id($db); // Get the generated question_id

                // Insert options
                foreach ($options as $option) {
                    $optionText = $option['text'];
                    $isAnswer = $option['is_answer'] === "true" ? 1 : 0;
                    $insertOptionQuery = "INSERT INTO options (question_id, option_text, is_answer) VALUES ($questionId, '$optionText', $isAnswer)";

                    if (!mysqli_query($db, $insertOptionQuery)) {
                        $error = "Error inserting option: " . mysqli_error($db);
                        break; // Stop the loop if an error occurs
                    }
                }
            } else {
                $error = "Error inserting question: " . mysqli_error($db);
            }

            // Check if an error occurred during the iteration
            if (!empty($error)) {
                break; // Stop the iteration if an error occurs
            }
        }

        echo "1";
        mysqli_close($db);
    } else {
        // Display the error message
        echo $error;
    }
}
?>