<?php
require_once ('database.php');

// Get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    if (isset($_FILES['cover']) && $_FILES['cover']['error'] === UPLOAD_ERR_OK) {
        // Define the target directory where the image will be stored
        $targetDirectory = '../upload/';

        // Generate a unique filename for the uploaded image
        $filename = uniqid() . '_' . $_FILES['cover']['name'];
        echo $filename;
        //Construct the target path for the image
        $targetPath = $targetDirectory . $filename;
        
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

        $query = "INSERT INTO lessons (title, description, videoUrl, coverPic, lecturer) VALUES ('$title', '$description', '$videoUrl','$targetPath', '$lecturer')";

        createData($query);
    }
}
