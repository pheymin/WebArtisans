<?php
require_once ('database.php');

// Get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];

if($method === 'GET'){
    getDataById('lessons', $_GET['id']);
}