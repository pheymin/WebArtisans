<?php
require('dbConfig.php');

// Retrieve the email from the AJAX request
$email = $_POST['email'];

// Prepare the SQL statement
$sql = "SELECT name FROM users WHERE email = ?";
$stmt = $db->prepare($sql);

// Bind the email parameter
$stmt->bind_param('s', $email);

// Execute the query
$stmt->execute();

// Bind the result
$stmt->bind_result($userName);

// Fetch the result
if ($stmt->fetch()) {
    // User name retrieved successfully
    echo $userName;
} else {
    // User not found or other error occurred
    echo "User not found";
}

// Close the statement and database connection
$stmt->close();
$db->close();
?>