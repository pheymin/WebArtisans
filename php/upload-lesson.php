<?php
require_once ('database.php');

// Get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];

if (isset($_FILES['coverPic']) && $_FILES['coverPic']['error'] === UPLOAD_ERR_OK) {
    // Define the target directory where the image will be stored
    $targetDirectory = '../upload/';

    // Generate a unique filename for the uploaded image
    $filename = uniqid() . '_' . $_FILES['coverPic']['name'];

    //Construct the target path for the image
    $targetPath = $targetDirectory . $filename;
    
    if (move_uploaded_file($_FILES['coverPic']['tmp_name'], $targetPath)) {
        echo $targetPath;
    } else {
        echo "File upload failed!";
    }
}

// if ($method === 'POST') {
//     // Retrieve other form data
//     $title = $_POST['title'];
//     $description = $_POST['description'];
//     $videoUrl = $_POST['videoUrl'];
//     $lecturer = $_POST['lecturer'];

//     $query = "INSERT INTO lessons (title, description, videoUrl, coverPic, lecturer) VALUES ('$title', '$description', '$videoUrl','$targetPath', '$lecturer')";

//     createData($query);
// }
