<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "home_stats";

	if ( isset($_POST[energy]) && isset($_POST[water]) && isset($_POST[gaz]) ){

		$energy = floatval ( trim( $_POST['energy'] ) );
		$water = floatval ( trim( $_POST['water'] ) );
		$gaz = floatval ( trim( $_POST['gaz'] ) );

	}
	else {

		$energy = $water = $gaz = NULL;
	}

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {

	    die("Connection failed: " . $conn->connect_error);

	} 

	$sql = " UPDATE tariffs SET energy = '$energy', water = '$water', gaz = '$gaz' ";

	if ($conn->query($sql) === TRUE) {
		
	    echo "New record created successfully";
	    
	} else {
		
	    echo "Error: " . $sql . "<br>" . $conn->error;
	    
	}

	$conn->close();
?>