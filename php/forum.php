<?php
    require_once ('database.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method === 'POST'){
        $postData = json_decode(file_get_contents('php://input'), true);
        //echo json_encode($postData);
        createData($postData);
    }

    if ($method === 'GET') {
        getAllData('forum');
    }

?>