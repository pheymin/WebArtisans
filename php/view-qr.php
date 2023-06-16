<?php
require('database.php');

$name = $_POST['name'];

$sql = "SELECT * FROM qr_details WHERE student_name = '$name'";
selectDataWithQuery($sql);
?>