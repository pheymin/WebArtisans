<?php
require('dbConfig.php');

// Retrieve the data from the AJAX POST request
$name = $_POST['name'];
$lesson = $_POST['lessonName'];
$score = $_POST['score'];
$grade = $_POST['grade'];

// Create the table if it doesn't exist
$createTableQuery = "CREATE TABLE IF NOT EXISTS quiz_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(255) NOT NULL,
  lesson_name VARCHAR(255) NOT NULL,
  result DECIMAL(5, 2) NOT NULL,
  grade CHAR(1) NOT NULL,
  submit_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)";

mysqli_query($db, $createTableQuery);

// Insert the result into the database using prepared statements
$insertQuery = "INSERT INTO quiz_results (student_name, lesson_name, result, grade) VALUES (?, ?, ?, ?)";
$insertStatement = mysqli_prepare($db, $insertQuery);
mysqli_stmt_bind_param($insertStatement, 'ssds', $name, $lesson, $score, $grade);
$result = mysqli_stmt_execute($insertStatement);

// Check if the insertion was successful
if ($result) {
  // Return a success response
  echo json_encode(['success' => true]);
} else {
  // Return an error response
  echo json_encode(['success' => false]);
}
?>