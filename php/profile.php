<?php
require_once ('database.php');

$method = $_SERVER['REQUEST_METHOD'];

if (isset($_GET['id']) && count($_GET) === 1) {
    $id = $_GET['id'];

    $sql = "SELECT * FROM users WHERE id = $id";

    selectDataWithQuery($sql);
}
?>