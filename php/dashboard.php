<?php
    require_once ('database.php');

    $method = $_SERVER['REQUEST_METHOD'];

    if ($method === 'GET') {
        //echo "GET";
        selectDataWithQuery($_GET['query']);    
    }

?>