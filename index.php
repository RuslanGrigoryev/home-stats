<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
	<meta charset="UTF-8">
	<title>Home stats</title>
	<link rel="shortcut icon" href="img/favicon.ico" /> 
	<link rel="stylesheet" type="text/css" href="css/build/global.min.css">
</head>
<body>

	<?php

		require '/php/psw.php';

	?>
	
	<div class="container">

		<div class="row">
			
			<nav class="navbar navbar-default">

			  	<div class="container-fluid">

			    	<div class="navbar-header">

			     		<a class="navbar-brand" href="#/">Home stats</a>

			    	</div>

			    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

			      <ul class="nav navbar-nav">

			        <li><a href="#/new">New</a></li>

			        <li><a href="#/chart">Chart</a></li>

			        <li><a href="#/tariffs">Tariffs</a></li>

			      </ul>

			    </div>

			  </div>

			</nav>

		</div>
		
	</div>
	
	<div class="container b-main" ng-view></div>

	<footer>
		
		<div class="container">

			<div class="row text-center">
				
				<span>©</span>

			</div>

		</div>

	</footer>

	<script type="text/javascript" src="js/build/main.js"></script>
</body>
</html>