<?php
require ('dbConfig.php');

//$data = table name
function getAllData($data){
    global $db;
    $sql = "SELECT * FROM $data";
    $result = $db->query($sql);

    // Check if any rows were returned
    if ($result->num_rows > 0) {
        $data = array();

        // Fetch the data from the result set
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Set the response content type to JSON
        header('Content-Type: application/json');

        // Send the JSON response
        echo json_encode($data);
    } else {
        echo "No data found.";
    }

    $db->close();
}

//$data = table name
function getDataById($data, $id){
    global $db;
    $sql = "SELECT * FROM $data WHERE id = $id";
    $result = $db->query($sql);

    // Check if any rows were returned
    if ($result->num_rows > 0) {
        $data = array();

        // Fetch the data from the result set
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Set the response content type to JSON
        header('Content-Type: application/json');

        // Send the JSON response
        echo json_encode($data);
    } else {
        echo "No data found.";
    }

    $db->close();
}

// create/update/delete
function createData($sql){
    global $db;

    // Execute the query
    if ($db->query($sql)) {
        // Query executed successfully
        echo "Data inserted successfully!";
    } else {
        // Query execution failed
        echo "Error: " . $db->error;
    }

    // Close the database connection
    $db->close();
}

function selectDataWithQuery($cmd){
    global $db;
    $result = $db->query($cmd);

    // Check if any rows were returned
    if ($result->num_rows > 0) {
        $data = array();

        // Fetch the data from the result set
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        // Set the response content type to JSON
        header('Content-Type: application/json');

        // Send the JSON response
        echo json_encode($data);
    } else {
        echo "No data found.";
    }

    $db->close();
}