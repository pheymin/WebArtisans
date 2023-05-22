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
        $errors[] = "Course is required.";
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
        // Connect to the MySQL server
        $servername = "localhost";
        $username = "root";
        $password = "";

        $conn = new mysqli($servername, $username, $password);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Create the database if it doesn't exist
        $dbname = "webartisans";
        $createDbSql = "CREATE DATABASE IF NOT EXISTS $dbname";
        if ($conn->query($createDbSql) === TRUE) {
            // Select the database
            $conn->select_db($dbname);

            // Create the courses table if it doesn't exist
            $coursesTable = "courses";
            $createCoursesTableSql = "CREATE TABLE IF NOT EXISTS $coursesTable (
                id INT(11) AUTO_INCREMENT PRIMARY KEY,
                course_name VARCHAR(255)
            )";
            if ($conn->query($createCoursesTableSql) === TRUE) {
                // Create the quiz table if it doesn't exist
                $quizTable = "quiz";
                $createQuizTableSql = "CREATE TABLE IF NOT EXISTS $quizTable (
                    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                    course_name INT(11) NOT NULL,
                    FOREIGN KEY (course_name) REFERENCES $coursesTable(course_name)
                )";
                if ($conn->query($createQuizTableSql) === TRUE) {
                    // Get the course ID
                    $getCourseIdSql = "SELECT id FROM $coursesTable WHERE course_name = '$title'";
                    $courseResult = $conn->query($getCourseIdSql);
                    if ($courseResult && $courseResult->num_rows > 0) {
                        $courseRow = $courseResult->fetch_assoc();
                        $courseId = $courseRow['id'];

                        // Save the form data to the quiz table
                        $insertSql = "INSERT INTO $quizTable (course_id) VALUES ('$courseId')";
                        if ($conn->query($insertSql) === TRUE) {
                            $quizId = $conn->insert_id;

                            // Create the questions table if it doesn't exist
                            $questionsTable = "questions";
                            $createQuestionsTableSql = "CREATE TABLE IF NOT EXISTS $questionsTable (
                                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                                quiz_id INT(6) UNSIGNED,
                                question_text VARCHAR(1000) NOT NULL,
                                FOREIGN KEY (quiz_id) REFERENCES $quizTable(id)
                            )";
                            if ($conn->query($createQuestionsTableSql) === TRUE) {
                                foreach ($questions as $index => $question) {
                                    $questionText = $question['question'];
                                    $options = $question['options'];

                                    // Save the question to the table
                                    $insertQuestionSql = "INSERT INTO $questionsTable (quiz_id, question_text) VALUES ('$quizId', '$questionText')";
                                    if ($conn->query($insertQuestionSql) === TRUE) {
                                        $questionId = $conn->insert_id;

                                        // Create the options table if it doesn't exist
                                        $optionsTable = "options";
                                        $createOptionsTableSql = "CREATE TABLE IF NOT EXISTS $optionsTable (
                                            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                                            question_id INT(6) UNSIGNED,
                                            option_text VARCHAR(500) NOT NULL,
                                            is_answer TINYINT(1) NOT NULL,
                                            FOREIGN KEY (question_id) REFERENCES $questionsTable(id)
                                        )";
                                        if ($conn->query($createOptionsTableSql) === TRUE) {
                                            foreach ($options as $optionIndex => $option) {
                                                $optionText = $option['text'];
                                                $isAnswer = $option['is_answer'] === "true" ? 1 : 0;

                                                // Save the option to the table
                                                $optionSql = "INSERT INTO $optionsTable (question_id, option_text, is_answer) VALUES ('$questionId', '$optionText', '$isAnswer')";
                                                $conn->query($optionSql);
                                            }
                                        } else {
                                            echo "Error creating options table: " . $conn->error;
                                        }
                                    } else {
                                        echo "Error inserting question: " . $conn->error;
                                    }
                                }

                                echo "Quiz created successfully.";
                            } else {
                                echo "Error creating questions table: " . $conn->error;
                            }
                        } else {
                            echo "Error inserting quiz: " . $conn->error;
                        }
                    } else {
                        echo "Error retrieving course ID: " . $conn->error;
                    }
                } else {
                    echo "Error creating quiz table: " . $conn->error;
                }
            } else {
                echo "Error creating courses table: " . $conn->error;
            }
        } else {
            echo "Error creating database: " . $conn->error;
        }
        $conn->close();
    } else {
        // If there are validation errors, display them
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>