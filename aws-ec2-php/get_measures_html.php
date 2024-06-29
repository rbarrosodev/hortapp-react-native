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
    // Start HTML output
    echo "<html><body><table border='1'>";
    
    // Fetch all rows and display them as HTML
    while($row = $result->fetch_assoc()) {
        if($row['second_plant'] == 'empty' && $row['third_plant'] == 'empty') {

            echo "<tr><th>ID da Horta</th><th>Primeira Planta</th><th>Valor da Umidade (%) [50 a 90%]</th><th>Valor da Temperatura (Celsius) [18 a 24 graus]</th><th>Valor de Luminosidade [2000 a 3000 lumens]</th><th>Data/Hora Agora</th></tr>"; // Change table headers as per your database schema
            $timezone = new DateTimeZone('GMT-3');

            // Create a DateTime object for the current time
            $current_time = new DateTime('now', $timezone);

            // Format the current time as desired
            $current_time_formatted = $current_time->format('d-m-Y H:i:s');


            echo "<tr>";
            echo "<td>" . htmlspecialchars($row['garden_id']) . "</td>"; // Assuming 'garden_id' is a column, change as per your database schema
            echo "<td>" . htmlspecialchars($row['first_plant']) . "</td>"; // Assuming 'garden_name' is a column, change as per your database schema
            if ((float) $row['first_plant_moisture_value'] < 50.0 || (float) $row['first_plant_moisture_value'] > 90.0) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['first_plant_moisture_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['first_plant_moisture_value']) . "</td>";
            }

            if ((float) $row['first_plant_temperature_value'] < 18.0 || (float) $row['first_plant_temperature_value'] > 24.0) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['first_plant_temperature_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['first_plant_temperature_value']) . "</td>";
            }

            if ((int) $row['light_value'] < 2000 || (int) $row['light_value'] > 3000) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['light_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['light_value']) . "</td>";
            }
            echo "<td>" . $current_time_formatted . "</td>"; // Assuming 'location' is a column, change as per your database schema
            echo "</tr>";
        }
        else {
            echo "<tr><th>ID da Horta</th><th>Primeira Planta</th><th>Valor de Luminosidade [2000 a 3000 lumens]</th><th>Valor da Umidade (%) [50 a 90%]</th><th>Valor da Temperatura (Celsius) [18 a 24 graus]</th><th>Segunda Planta</th><th>Valor da Umidade (%) [50 a 90%]</th><th>Valor da Temperatura (Celsius) [18 a 24 graus]</th><th>Terceira Planta</th><th>Valor da Umidade (%) [50 a 90%]</th><th>Valor da Temperatura (Celsius) [18 a 24 graus]</th><th>Data/Hora Agora</th></tr>"; // Change table headers as per your database schema
            $timezone = new DateTimeZone('GMT-3');

            // Create a DateTime object for the current time
            $current_time = new DateTime('now', $timezone);

            // Format the current time as desired
            $current_time_formatted = $current_time->format('d-m-Y H:i:s');


            echo "<tr>";
            echo "<td>" . htmlspecialchars($row['garden_id']) . "</td>"; // Assuming 'garden_id' is a column, change as per your database schema
            echo "<td>" . htmlspecialchars($row['first_plant']) . "</td>"; // Assuming 'garden_name' is a column, change as per your database schema
            if ((int) $row['light_value'] < 2000 || (int) $row['light_value'] > 3000) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['light_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['light_value']) . "</td>";
            }
            if ((float) $row['first_plant_moisture_value'] < 50.0 || (float) $row['first_plant_moisture_value'] > 90.0) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['first_plant_moisture_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['first_plant_moisture_value']) . "</td>";
            }

            if ((float) $row['first_plant_temperature_value'] < 18.0 || (float) $row['first_plant_temperature_value'] > 24.0) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['first_plant_temperature_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['first_plant_temperature_value']) . "</td>";
            }

            echo "<td>" . htmlspecialchars($row['second_plant']) . "</td>"; // Assuming 'garden_name' is a column, change as per your database schema
            if ((float) $row['second_plant_moisture_value'] < 50.0 || (float) $row['second_plant_moisture_value'] > 90.0) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['second_plant_moisture_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['second_plant_moisture_value']) . "</td>";
            }

            if ((float) $row['second_plant_temperature_value'] < 18.0 || (float) $row['second_plant_temperature_value'] > 24.0) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['second_plant_temperature_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['second_plant_temperature_value']) . "</td>";
            }
            echo "<td>" . htmlspecialchars($row['third_plant']) . "</td>"; // Assuming 'garden_name' is a column, change as per your database schema
            if ((float) $row['third_plant_moisture_value'] < 50.0 || (float) $row['third_plant_moisture_value'] > 90.0) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['third_plant_moisture_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['third_plant_moisture_value']) . "</td>";
            }

            if ((float) $row['third_plant_temperature_value'] < 18.0 || (float) $row['third_plant_temperature_value'] > 24.0) {
                echo "<td style='background-color: red; color: white;'>" . htmlspecialchars($row['third_plant_temperature_value']) . "</td>"; // Example condition: background color yellow if garden name is longer than 10 characters
            }
            else {
                echo "<td style='background-color: green; color: white;'>" . htmlspecialchars($row['third_plant_temperature_value']) . "</td>";
            }
            echo "<td>" . $current_time_formatted . "</td>"; // Assuming 'location' is a column, change as per your database schema
            echo "</tr>";
        }
    }

    echo "</table></body></html>";
} else {
    // Set HTTP response code to indicate not found and display message
    http_response_code(404);
    echo "<html><body><h1>Nenhuma horta encontrada com esse ID, tente novamente.</h1></body></html>";
}

// Close connection
$stmt->close();
$conn->close();
?>
