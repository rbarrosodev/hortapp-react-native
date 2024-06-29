<?php
// Database connection parameters
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

// Check if both garden_id and first_plant are passed in the URL
if(isset($_GET['garden_id']) && isset($_GET['first_plant'])) {
    $garden_id = $_GET['garden_id'];
    $first_plant = $_GET['first_plant'];

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("UPDATE gardens SET first_plant = ? WHERE garden_id = ?");
    $stmt->bind_param("si", $first_plant, $garden_id);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
else if(isset($_GET['garden_id']) && isset($_GET['second_plant'])) {
    $garden_id = $_GET['garden_id'];
    $second_plant = $_GET['second_plant'];

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("UPDATE gardens SET second_plant = ? WHERE garden_id = ?");
    $stmt->bind_param("si", $second_plant, $garden_id);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
if(isset($_GET['garden_id']) && isset($_GET['third_plant'])) {
    $garden_id = $_GET['garden_id'];
    $third_plant = $_GET['third_plant'];

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("UPDATE gardens SET third_plant = ? WHERE garden_id = ?");
    $stmt->bind_param("si", $third_plant, $garden_id);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} 
else {
    die("Both garden_id and plant number (first_plant, second_plant or third_plant) values are required in the URL.");
}
?>
