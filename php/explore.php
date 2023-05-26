<?php
require ('database.php');

// Get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];

if(isset($_GET['get'])){
    getAllData('lessons');
}

if(isset($_GET['search'])){
    $search = $_GET['search'];
    $sql = "SELECT * FROM lessons WHERE title LIKE '%$search%' OR SUBSTRING(description, 1, 50) LIKE '%$search%' OR lecturer LIKE '%$search%'";

    selectDataWithQuery($sql);
}

if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql = "SELECT * FROM lessons WHERE id = $id";

    selectDataWithQuery($sql);
}