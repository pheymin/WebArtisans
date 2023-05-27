<?php
$host = "localhost";
$database = "webartisans1";
$db = mysqli_connect($host, "root", "", $database);

// Check the database connection
if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}