<?php
require_once ('database.php');

$method = $_SERVER['REQUEST_METHOD'];

if (isset($_GET['id']) && count($_GET) === 1) {
    $id = $_GET['id'];

    $sql = "SELECT * FROM users WHERE id = $id";

    selectDataWithQuery($sql);
}

if(isset($_GET["lesson"])){
    $id = $_GET['id'];

    $sql = "SELECT COUNT(*) AS taken, SUM(completed) AS completed FROM learner_lessons WHERE user_id = $id";

    selectDataWithQuery($sql);
}


if ($method === 'POST'){
    $postData = json_decode(file_get_contents('php://input'), true);

    $id = $postData['id'];
    $name = $postData['name'];
    $phone = $postData['phone'];
    $gender = $postData['gender'];
    $occupation = $postData['occupation'];

    $query = "UPDATE users SET NAME = '$name', PHONE = '$phone', GENDER = '$gender', OCCUPATION = '$occupation' WHERE ID = '$id'";

    createData($query);
}

?>