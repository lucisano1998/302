
<html>
<script>
</script>

<body>
	<div>
	<?php
	session_start();


	if(!empty($_POST)){
		$name = $_POST['productname'];
		$qty = $_POST['qty'];

		$sql = "SELECT `engname`,`price`,`img`,`weight`,`publisher` From `game` where `engname`='$name'";

		$mysqli = new mysqli('localhost','root','','jd');
	  if ($mysqli->connect_error){
	            die("connection failed".$mysqli->connect_error);
	            }
	            $result = $mysqli->query($sql);
	            $array = array();

	            if ($result->num_rows>0){
	                while ($row = $result->fetch_assoc()) {
	                    $array[]=$row;
	                }
	                #$sfdata = json_encode($array);

	            }

	}

	/*
	  $sql =  'SELECT id,  engname, price, img, weight, publisher FROM game WHERE engname = "$name"';
	  $stmt = $pdo->prepare($sql);
	  $stmt->execute();

	} catch (PDOException $e) {
	  die($e->getMessage());
	*/
	?>
</div>

<div>
<?php if(!isset($_SESSION["loggedin"])) : ?>
    <p>Please login to check your order status<a href="index.html">  Login here</a>.</p>
<?php endif ?>
</div>

	<div>
		<?php if(isset($_SESSION["loggedin"])) : ?>

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
			<?php
			if ($array != ''){
				echo "<tr>";
				echo "<form method='POST' action='product.php'>";
      			echo "<td><img src='./cover/1.png' width='100' height='100'></td>";
      			echo "<td><input type='text' value='".$name."' readonly name='productname'></td>";
      			echo "<td><input type='text' value='$500' name='price' readonly></td>";
      			echo "<td><input type='text' value='1.2' name='weight' name='weight' readonly></td>";
      			echo "<td><input type='text' value='Marti and Starsky Wong' name='publisher' readonly></td>";
      			echo "<td><input type='text' value='".$qty."' readonly name='qty'></td>";
      			echo "<td><input type='submit' value='pay'></td>";
      			echo "</tr>";
			} else{
				echo '<script>';
				echo "window.alert('no product in the cart!')";
				echo '</script>';
			}
			?>
		<?php endif ?>
	</div>
</body>
</html>
