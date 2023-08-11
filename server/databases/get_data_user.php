<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Change * to your front-end domain if possible
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Database connection and data retrieval code (as shown in the previous PHP code)

// Rest of your PHP code


header('Content-Type: application/json');

// Database connection
$conn = mysqli_connect("localhost", "root", "", "instargram_data");

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Fetch data using the SQL query with JOINs
$sql = "SELECT * FROM `user_data`";

$result = mysqli_query($conn, $sql);

// Check if there are any rows returned
if (mysqli_num_rows($result) > 0) {
    // Fetch data and store it in an array
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    // Output the data in JSON format
    echo json_encode($data);
} else {
    // No data found
    echo json_encode(array('message' => 'No data found.'));
}

// Close the connection
mysqli_close($conn);
