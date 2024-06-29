<?php
// Database connection
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

// Check if parameters are set in the URL
if(isset($_GET['garden_id']) && isset($_GET['light_value']) && isset($_GET['first_plant_temperature_value']) && isset($_GET['first_plant_moisture_value']) 
&& isset($_GET['second_plant_temperature_value']) && isset($_GET['second_plant_moisture_value']) && isset($_GET['third_plant_temperature_value']) && isset($_GET['third_plant_moisture_value'])) {
    // Sanitize input to prevent SQL injection
    $garden_id = mysqli_real_escape_string($conn, $_GET['garden_id']);
    $light_value = mysqli_real_escape_string($conn, $_GET['light_value']);
    $first_plant_temperature_value = mysqli_real_escape_string($conn, $_GET['first_plant_temperature_value']);
    $first_plant_moisture_value = mysqli_real_escape_string($conn, $_GET['first_plant_moisture_value']);
    $second_plant_temperature_value = mysqli_real_escape_string($conn, $_GET['second_plant_temperature_value']);
    $second_plant_moisture_value = mysqli_real_escape_string($conn, $_GET['second_plant_moisture_value']);
    $third_plant_temperature_value = mysqli_real_escape_string($conn, $_GET['third_plant_temperature_value']);
    $third_plant_moisture_value = mysqli_real_escape_string($conn, $_GET['third_plant_moisture_value']);

    // Update query
    $sql = "UPDATE gardens SET light_value = '$light_value', first_plant_temperature_value = '$first_plant_temperature_value', first_plant_moisture_value = '$first_plant_moisture_value', second_plant_temperature_value = '$second_plant_temperature_value', second_plant_moisture_value = '$second_plant_moisture_value', third_plant_temperature_value = '$third_plant_temperature_value', third_plant_moisture_value = '$third_plant_moisture_value' WHERE garden_id = '$garden_id'";

    // Execute query
    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
} else {
    echo "Please provide 'garden_id', 'light_value', 'first_plant_temperature_value', 'first_plant_moisture_value', 'second_plant_temperature_value', 'second_plant_moisture_value', 'third_plant_temperature_value', 'third_plant_moisture_value' parameters in the URL.";
}

// Close connection
$conn->close();
?>
