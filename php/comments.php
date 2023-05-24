<?php
    require_once ('database.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if($method === 'POST'){
        // $postData = json_decode(file_get_contents('php://input'), true);
        //createData($postData);
    }

    if ($method === 'GET') {
        selectDataWithQuery($_GET['query']);
    }

?>