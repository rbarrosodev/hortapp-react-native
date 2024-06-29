<?php
// Database connection settings
$servername = "hortapp-esp32.c3s820iok7qz.us-east-1.rds.amazonaws.com"; // Change this to your MySQL server hostname
$username = "admin"; // Change this to your MySQL username
$password = "barroso12345"; // Change this to your MySQL password
$database = "hortapp_db"; // Change this to your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_GET['user_id'])) {
    $user_id = $_GET['user_id'];
} else {
    die("User ID not provided.");
}

// Prepare SQL statement with parameter
$sql = "SELECT * FROM user_gardens WHERE user_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $user_id); // Assuming parameter is a string, change "s" if it's a different data type
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    http_response_code(200);
} else {
    http_response_code(404);
}

// Close connection
$stmt->close();
$conn->close();
?>
