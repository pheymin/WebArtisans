<?php
require('database.php');

$name = $_POST['name'];

$sql = "SELECT * FROM qr_details WHERE student_name = '$name'";
selectDataWithQuery($sql);
// $result = $db->query($sql);

// $response = array();

// if ($result->num_rows > 0) {
//     while ($row = $result->fetch_assoc()) {
//         $qrData = array(
//             'studentName' => $row['student_name'],
//             'lessonName' => $row['lesson_name'],
//             'date' => $row['date']
//         );
//         array_push($response, $qrData);
//     }
// } else {
//     // If no QR details found, send a response with an error message
//     $response['error'] = "No completed lessons";
// }

// // Close the database connection
// $db->close();

// // Send the JSON response
// echo json_encode($response);
?>