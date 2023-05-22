<?php
// Connect to MySQL server
$connection = mysqli_connect('localhost', 'root', '', 'webartisans');

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

// Create the table if it doesn't exist
$createTableQuery = "CREATE TABLE IF NOT EXISTS courses (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255)
)";
mysqli_query($connection, $createTableQuery);

// Insert sample data if table is newly created
$insertDataQuery = "INSERT INTO courses (course_name) SELECT 'Course A' FROM dual WHERE NOT EXISTS (SELECT * FROM courses)";
mysqli_query($connection, $insertDataQuery);

// Fetch options from MySQL
$fetchOptionsQuery = "SELECT course_name FROM courses";
$result = mysqli_query($connection, $fetchOptionsQuery);

// Iterate over the result and store options in an array
$options = array();
while ($row = mysqli_fetch_assoc($result)) {
    $courseName = $row['course_name'];
    $options[] = $courseName;
}

// Close the connection
mysqli_close($connection);

// Return the options as JSON
echo json_encode($options);
?>