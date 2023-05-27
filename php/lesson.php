<?php
require_once('database.php');

// Get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];

if (isset($_GET['id']) && count($_GET) === 1) {
    getDataById('lessons', $_GET['id']);
}

if (isset($_GET['id']) && isset($_GET['user_id'])) {
    $id = $_GET['id'];
    $user_id = $_GET['user_id'];

    $sql = "SELECT learner_lessons.user_id, learner_lessons.completed
            FROM lessons
            LEFT JOIN learner_lessons ON lessons.id = learner_lessons.lesson_id
            WHERE lessons.id = $id AND learner_lessons.user_id = $user_id";

    selectDataWithQuery($sql);
}

if($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    createData($data);
}