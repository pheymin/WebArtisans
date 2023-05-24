<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $title = $_POST['title'];
    $questions = $_POST['questions'];

    // Validate form data
    $errors = [];

    // Validate title
    if (empty($title)) {
        $errors[] = "lesson is required.";
    }

    // Validate questions
    foreach ($questions as $index => $question) {
        $questionText = $question['question'];
        $options = $question['options'];

        if (empty($questionText)) {
            $errors[] = "Question " . ($index + 1) . " is required.";
        }

        $hasCorrectAnswer = false; // Flag to check if there is at least one correct answer

        foreach ($options as $optionIndex => $option) {
            $optionText = $option['text'];

            if (empty($optionText)) {
                $errors[] = "Option " . ($optionIndex + 1) . " of Question " . ($index + 1) . " is required.";
            }

            if ($option['is_answer'] === "true") {
                $hasCorrectAnswer = true;
            }
        }

        if ($hasCorrectAnswer === false) {
            $errors[] = "Question " . ($index + 1) . " must have a correct answer.";
        }
    }

    // If there are no errors, save the form data to the database
    if (empty($errors)) {
        require_once('dbConfig.php');

        // Create the lessons table if it doesn't exist
        $lessonsTable = "lessons";
        $createlessonsTableSql = "CREATE TABLE IF NOT EXISTS $lessonsTable (
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            lesson_name VARCHAR(255)
        )";
        if ($db->query($createlessonsTableSql) === TRUE) {
            // Create the quiz table if it doesn't exist
            $quizTable = "quiz";
            $createQuizTableSql = "CREATE TABLE IF NOT EXISTS $quizTable (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                lesson_id INT(11) NOT NULL,
                FOREIGN KEY (lesson_id) REFERENCES $lessonsTable(id)
            )";
            if ($db->query($createQuizTableSql) === TRUE) {
                // Get the lesson ID
                $getlessonIdSql = "SELECT id FROM $lessonsTable WHERE lesson_name = '$title'";
                $lessonResult = $db->query($getlessonIdSql);
                if ($lessonResult && $lessonResult->num_rows > 0) {
                    $lessonRow = $lessonResult->fetch_assoc();
                    $lessonId = $lessonRow['id'];

                    // Save the form data to the quiz table
                    $insertSql = "INSERT INTO $quizTable (lesson_id) VALUES ('$lessonId')";
                    if ($db->query($insertSql) === TRUE) {
                        $quizId = $db->insert_id;

                        // Create the questions table if it doesn't exist
                        $questionsTable = "questions";
                        $createQuestionsTableSql = "CREATE TABLE IF NOT EXISTS $questionsTable (
                            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                            quiz_id INT(6) UNSIGNED,
                            question_text VARCHAR(1000) NOT NULL,
                            FOREIGN KEY (quiz_id) REFERENCES $quizTable(id)
                        )";
                        if ($db->query($createQuestionsTableSql) === TRUE) {
                            foreach ($questions as $index => $question) {
                                $questionText = $question['question'];
                                $options = $question['options'];

                                // Save the question to the table
                                $insertQuestionSql = "INSERT INTO $questionsTable (quiz_id, question_text) VALUES ('$quizId', '$questionText')";
                                if ($db->query($insertQuestionSql) === TRUE) {
                                    $questionId = $db->insert_id;

                                    // Create the options table if it doesn't exist
                                    $optionsTable = "options";
                                    $createOptionsTableSql = "CREATE TABLE IF NOT EXISTS $optionsTable (
                                        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                                        question_id INT(6) UNSIGNED,
                                        option_text VARCHAR(500) NOT NULL,
                                        is_answer TINYINT(1) NOT NULL,
                                        FOREIGN KEY (question_id) REFERENCES $questionsTable(id)
                                    )";
                                    if ($db->query($createOptionsTableSql) === TRUE) {
                                        foreach ($options as $optionIndex => $option) {
                                            $optionText = $option['text'];
                                            $isAnswer = $option['is_answer'] === "true" ? 1 : 0;

                                            // Save the option to the table
                                            $optionSql = "INSERT INTO $optionsTable (question_id, option_text, is_answer) VALUES ('$questionId', '$optionText', '$isAnswer')";
                                            $db->query($optionSql);
                                        }
                                    } else {
                                        echo "Error creating options table: " . $db->error;
                                    }
                                } else {
                                    echo "Error inserting question: " . $db->error;
                                }
                            }

                            echo "Quiz created successfully.";
                        } else {
                            echo "Error creating questions table: " . $db->error;
                        }
                    } else {
                        echo "Error inserting quiz: " . $db->error;
                    }
                } else {
                    echo "Error retrieving lesson ID: " . $db->error;
                }
            } else {
                echo "Error creating quiz table: " . $db->error;
            }
        } else {
            echo "Error creating lessons table: " . $db->error;
        }
        $db->close();
    } else {
        // If there are validation errors, display them
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>