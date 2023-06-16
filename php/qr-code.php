<?php
// Retrieve the QR details from the URL parameters
$studentName = $_POST['name'];
$lessonName = $_POST['lessonName'];
$date = $_POST['date'];

require('dbConfig.php');

// Check if the table exists, if not, create it
$tableName = "qr_details";
$tableQuery = "CREATE TABLE IF NOT EXISTS $tableName (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    lesson_name VARCHAR(50) NOT NULL,
    date DATE NOT NULL
)";
$db->query($tableQuery);

// Check if the same row already exists
$checkQuery = "SELECT COUNT(*) AS count FROM qr_details WHERE student_name = ? AND lesson_name = ?";
$stmt = $db->prepare($checkQuery);
$stmt->bind_param("sss", $studentName, $lessonName, $date);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

if ($row['count'] == 0) {
    // Prepare the SQL statement to insert the QR details into the database
    $insertQuery = "INSERT INTO qr_details (student_name, lesson_name, date) VALUES (?, ?, ?)";
    $stmt = $db->prepare($insertQuery);
    $stmt->bind_param("sss", $studentName, $lessonName, $date);
    $stmt->execute();
    $stmt->close();

    echo "Record inserted successfully.";
} else {
    echo "Record already exists.";
}

// Close the database connection
$db->close();
?>