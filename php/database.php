<?php

$host = "localhost";
$database = "webartisans";
//("localhost", "root", "", "data name")
$db = mysqli_connect($host, "root", "", $database);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Execute the query to retrieve the data
    if ($db->connect_error) {
        die("Connection failed: " . $db->connect_error);
    }

    $sql = "SELECT id, title, description, videoUrl, upload_time, coverPic, lecturer FROM lessons";
    $result = $db->query($sql);

    // Check if any rows were returned
    if ($result->num_rows > 0) {
        $data = array();

        // Fetch the data from the result set
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Set the response content type to JSON
        header('Content-Type: application/json');

        // Send the JSON response
        echo json_encode($data);
    } else {
        echo "No data found.";
    }

    $db->close();
}

if (isset($_POST["save"])) {

    if (isset($_FILES['cover']) && $_FILES['cover']['error'] === UPLOAD_ERR_OK) {
        // Define the target directory where the image will be stored
        $targetDirectory = '../upload/';

        // Generate a unique filename for the uploaded image
        $filename = uniqid() . '_' . $_FILES['cover']['name'];
        echo $filename;
        //Construct the target path for the image
        $targetPath = $targetDirectory . $filename;
        echo $targetPath;
        if (move_uploaded_file($_FILES['cover']['tmp_name'], $targetPath)) {
            echo "File uploaded successfully!";
        } else {
            echo "File upload failed!";
        }

        // Retrieve other form data
        $title = $_POST['title'];
        $description = $_POST['description'];
        $videoUrl = $_POST['videoUrl'];
        $lecturer = $_POST['lecturer'];

        // Check the database connection
        if ($db->connect_error) {
            die("Connection failed: " . $db->connect_error);
        }

        $query = "INSERT INTO lessons (title, description, videoUrl, coverPic, lecturer) VALUES ('$title', '$description', '$videoUrl','$targetPath', '$lecturer')";

        // Execute the query
        if ($db->query($query)) {
            // Query executed successfully
            echo "Data inserted successfully!";
        } else {
            // Query execution failed
            echo "Error: " . $db->error;
        }

        // Close the database connection
        $db->close();
    }
}

