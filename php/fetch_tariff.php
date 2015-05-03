<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "home_stats";

	$conn = new mysqli($servername, $username, $password, $dbname);

	$result = mysqli_query($conn, "select * from tariffs");

	$data = array();

	while ($row = mysqli_fetch_array($result)) {
		
	  $data[] = $row;
	  
	}

	print json_encode($data);
?>