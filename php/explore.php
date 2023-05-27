<?php
require('database.php');

// Get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];

if (isset($_GET['get'])) {
    if ($_GET['get'] == 'all') {
        getAllData('lessons');
    } else {
        $id = $_GET['get'];
        
        $sql = "SELECT lessons.*, learner_lessons.* FROM lessons LEFT JOIN learner_lessons ON lessons.id = learner_lessons.lesson_id WHERE learner_lessons.user_id = $id";
        selectDataWithQuery($sql);
    }
}

if (isset($_GET['search'])) {
    $search = $_GET['search'];
    $sql = "SELECT * FROM lessons WHERE title LIKE '%$search%' OR SUBSTRING(description, 1, 50) LIKE '%$search%' OR lecturer LIKE '%$search%'";

    selectDataWithQuery($sql);
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM lessons WHERE id = $id";

    selectDataWithQuery($sql);
}
