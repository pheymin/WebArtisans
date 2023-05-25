<?php
require('dbConfig.php');

// Retrieve the data from the AJAX POST request
$lessonId = $_POST['lessonId'];
$studentId = $_POST['studentId'];
$score = $_POST['score'];
$grade = $_POST['grade'];

// Create the table if it doesn't exist
$createTableQuery = "CREATE TABLE IF NOT EXISTS quiz_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_id INT NOT NULL,
  lesson_id INT NOT NULL,
  result DECIMAL(5, 2) NOT NULL,
  grade CHAR(1) NOT NULL,
  submit_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)";

$result = mysqli_query($db, $createTableQuery);

// Insert the result into the database
$insertQuery = "INSERT INTO quiz_results (student_id, lesson_id, result, grade)
                VALUES ($studentId, $lessonId, $score, '$grade')";
$result = mysqli_query($db, $insertQuery);

// Check if the insertion was successful
if ($result) {
  // Return a success response
  echo json_encode(['success' => true]);
} else {
  // Return an error response
  echo json_encode(['success' => false]);
}
?>