<?php
require_once "../inc/db.inc.php";
session_start();
$pdo = dbconnect();

try {
  $sql =  'SELECT id,  engname, price, img, weight, publisher FROM game';
  $stmt = $pdo->prepare($sql);
  $stmt->execute();

} catch (PDOException $e) {
  die($e->getMessage());
}
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
      <?php
      $numFound = $stmt->rowCount();

      #$Test = $result['img'];
      #$eng = $result['engname'];

      #$img2 = "data:image/jpeg;base64,'.base64_encode( $result['img'] ).'";
      IF ( $numFound > 0) {

        echo    "<table>";
        echo      "<form method='post' action='cart.php'>";
        echo        "<tr>";
        echo          "<td>"."</td>\n";
    		echo          "<td style='text-align:center'>"."Name"."</td>\n";
    		echo          "<td style='text-align:center'>"."Price"."</td>\n";
        echo          "<td>"."</td>\n";
        echo          "<td style='text-align:center'>"."Weight"."</td>\n";
        echo          "<td style='text-align:center'>"."Publisher"."</td>\n";
        echo          "<td style='text-align:center'>"."QTY"."</td>\n";
        echo        "</tr>";

        While ( $result = $stmt->fetch() ) {
          for ($i = 0; $i <= $result; $i++) {
            #cout << $i << "\n";



        echo        "<tr>\n";
        echo        "<td>";
        #echo        "input type ='image' src = data:image/jpeg;base64,base64_encode($Test)";
        #echo        "<input type ='image' src=".$img2.">";
        #echo        "<input type ='image' src=".$img2.">";
        echo        '<img src="data:image/jpeg;base64,'.base64_encode( $result['img'] ).'"/ width="100" height="100">';
        echo        "</td>\n";
        #echo        "<input` type = text size='10' name='Good' value=".$result['engname']."\">";
        #echo        "<td>"."<input  type = text  name='Good' "
        $a="<td>"."<input  type = text  name='Good' ";
        $a."value='".$result['engname']."' readonly style='text-align:center'>";
        echo $a;


        #echo        "</td>\n";
        #echo        "<input type = text name='Good' value=".$result['engname'].">";
        #echo        "<td>".$result['engname']."</td>\n";
        echo        "<td>".$result['price']."</td>\n";
        echo        "<td>"."</td>\n";
        echo        "<td>".$result['weight']."</td>\n";
        echo        "<td>".$result['publisher']."</td>\n";
        echo        "<td>"."<input type='number' name='qty' min='1' max='100' style='width:40px' value='1'>"."</td>\n";
        echo        "<td><input type ='submit' value='Add'></td>\n";
        }
        }
        echo        "</tr>";
        echo        "<tr>";
        #echo        "<td><input type ='submit' value='Add'></td>\n";
        echo        "</tr>";

    		echo	    "</form>";
        echo    "</table>";
}
      ?>





		</div>
	</body>
</html>
