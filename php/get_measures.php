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

// Get parameter from URL
if(isset($_GET['garden_code'])) {
    $garden_code = $_GET['garden_code'];
} else {
    die("Garden code not provided.");
}

// Prepare SQL statement with parameter
$sql = "SELECT * FROM gardens WHERE garden_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $garden_code); // Assuming parameter is a string, change "s" if it's a different data type
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "Garden ID: " . $row["garden_id"]. " - Timestamp: " . $row["timestamp"]. "<br>"; // Replace column_name with the actual name of your column
    }
} else {
    http_response_code(404);
}

// Close connection
$stmt->close();
$conn->close();