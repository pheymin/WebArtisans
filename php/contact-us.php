<?php
require_once ('database.php');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST'){
    $postData = json_decode(file_get_contents('php://input'), true);

    $query = "INSERT INTO feedback (MESSAGE, NAME, EMAIL, PHONE) VALUES ('".$postData['message']."', '".$postData['name']."', '".$postData['email']."', '".$postData['phone']."')";

    createData($query);
}
?>
