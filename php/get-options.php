<?php
require('dbConfig.php');

// Create the table if it doesn't exist
$createTableQuery = "CREATE TABLE IF NOT EXISTS lessons (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    lesson_name VARCHAR(255)
)";
mysqli_query($db, $createTableQuery);

// Insert sample data if table is newly created
$insertDataQuery = "INSERT INTO lessons (lesson_name) SELECT 'lesson A' FROM dual WHERE NOT EXISTS (SELECT * FROM lessons)";
mysqli_query($db, $insertDataQuery);

// Fetch options from MySQL
$fetchOptionsQuery = "SELECT lesson_name FROM lessons";
$result = mysqli_query($db, $fetchOptionsQuery);

// Iterate over the result and store options in an array
$options = array();
while ($row = mysqli_fetch_assoc($result)) {
    $lessonName = $row['lesson_name'];
    $options[] = $lessonName;
}

// Close the connection
mysqli_close($db);

// Return the options as JSON
echo json_encode($options);
?>