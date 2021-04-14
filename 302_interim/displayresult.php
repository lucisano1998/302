<?php
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit;
}

$username = $_SESSION['name'];



  $sql =  "SELECT `username`,`userphone`,`useraddress`,`productname`,`status` FROM `sforder` where `username`='$username'";

  $mysqli = new mysqli('localhost','root','','productdb');
  if ($mysqli->connect_error){
          die("connection failed".$mysqli->connect_error);
          }
          $result = $mysqli->query($sql);
          $array = array();
            if ($result->num_rows>0){
                while ($row = $result->fetch_assoc()) {
                    $array[]=$row;
                }
            }

if (!empty($array)){

$username = $array[0]['username'];
$userphone = $array[0]['userphone'];
$useraddress = $array[0]['useraddress'];
$productname = $array[0]['productname'];
$status = $array[0]['status'];
        
echo "<center>";
echo "<table border='1' width='50%'>\n";
echo "<tr>\n";
echo "<td> username</td>";
echo "<td>user phone</td>";
echo "<td>address</td>";
echo "<td>product name</td>";
echo "<td>status</td>";
echo "</tr>";
echo "<tr>";
echo "<td>".$username."</td>";
echo "<td>".$userphone."</td>";
echo "<td>".$useraddress."</td>";
echo "<td>".$productname."</td>";
echo "<td>".$status."</td>";
echo "</tr>";
echo "</table>";
echo "</center>";
}else{
    echo '<script>';
    echo "window.alert('no data founded!')";
    echo '</script>';
}


