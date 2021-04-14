<?php
require_once "../inc/db.inc.php";
session_start();
$pdo = dbconnect();

?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Home Page</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
	</head>
	<body class="loggedin">
		<nav class="navtop">
			<div>
				<h1>Website Title</h1>
        <a href="list.php"><i class="fas fa-user-circle"></i>Product</a>
				<a href="cart.php"><i class="fas fa-user-circle"></i>Cart</a>
				<a href="profile.php"><i class="fas fa-user-circle"></i>Profile</a>
				<a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a>
			</div>
		</nav>
		<div class="content">
			<h2>Product List</h2>

      <table border=1>
      <tr>
      <td>photo</td>
      <td>Name</td>
      <td>Price</td>
      <td>Weight</td>
      <td>Publisher</td>
      <td>QTY</td>
      <td></td>
      </tr>
      <tr>
      <form method='POST' action='cart.php'>
      <td><img src="./cover/1.png" width="100" height="100"></td>
      <td><input type=text name='productname' value='Little Fighter 2' readonly></td>
      <td>$500</td>
      <td>1.2</td>
      <td>Marti and Starsky Wong</td>
      <td><input type='number' name='qty' min=0 max=10></td>
      <td><input type='submit'></td>
      </tr>
      </form>
      <tr>
      <form method='POST' action='cart.php'>
      <td><img src="./cover/2.jpg" width="100" height="100"></td>
      <td><input type=text name='productname' value='Diablo2' readonly></td>
      <td>$500</td>
      <td>1.2</td>
      <td>Blizzard Entertainment</td>
      <td><input type='number' name='qty' min=0 max=10></td>
      <td><input type='submit'></td>
      </tr>
      </form>



      </table>




		</div>
	</body>
</html>
