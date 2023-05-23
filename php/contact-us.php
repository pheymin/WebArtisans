<?php
require_once ('database.php');

if(isset($_POST['send'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $sql = "INSERT INTO feedback (MESSAGE, NAME, EMAIL, PHONE) VALUES ('$message', '$name', '$email', '$phone')";
    createData($sql);   
}
?>
