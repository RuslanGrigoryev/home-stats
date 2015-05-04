<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "home_stats";

	if ( isset($_POST[date]) && isset($_POST[month]) && isset($_POST[energy]) && isset($_POST[water]) && isset($_POST[gaz]) ){

		$date = ( trim( $_POST['date'] ) );
		$month = ( trim( $_POST['month'] ) );
		$energy = floatval ( trim( $_POST['energy'] ) );
		$water = floatval ( trim( $_POST['water'] ) );
		$gaz = floatval ( trim( $_POST['gaz'] ) );

	}
	else {

		$energy = $water = $gaz = $month = $date = NULL;
	}

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {

	    die("Connection failed: " . $conn->connect_error);

	} 

	$sql = "INSERT INTO indicators (date, month, energy, water, gaz) VALUES ('$date', '$month', '$energy', '$water', '$gaz')";

	if ($conn->query($sql) === TRUE) {
		
	    echo "New record created successfully";
	    
	} else {
		
	    echo "Error: " . $sql . "<br>" . $conn->error;
	    
	}

	$conn->close();
?>