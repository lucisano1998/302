<?php
#header("Location: http://www.google.com");

session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit;
}


function insert(){
  $name = $_POST['productname'];
  $qty = $_POST['qty'];
  $weight = $_POST['weight'];

  $username = $_SESSION['name'];
  #echo $username;

  $sql1 = "SELECT `phonenum`,`address` from `phplogin` where `username`='$username'";
  $mysqli = new mysqli('localhost','root','','jd');
  if ($mysqli->connect_error){
          die("connection failed".$mysqli->connect_error);
          }
          $result = $mysqli->query($sql1);
          $array = array();
            if ($result->num_rows>0){
                while ($row = $result->fetch_assoc()) {
                    $array[]=$row;
                }
            }
          $phone = $array[0]['phonenum'];
          $address = $array[0]['address'];
          
          

  $sql= "INSERT INTO `order`(`id`,`username`,`userphone`,`useraddress`,`productname`,`productqty`,`productweight`,`status`) VALUES(null,'$username','$phone','$address','$name','$qty','$weight','processing')";
  
  $mysqli = new mysqli('localhost','root','','jd');
  if ($mysqli->connect_error){
          die("connection failed".$mysqli->connect_error);
          }
          $result = $mysqli->query($sql);
        }

function select(){
  $username = $_SESSION['name'];
  $sql1= "SELECT * FROM `order` where username='$username'";

  $mysqli = new mysqli('localhost','root','','jd');
  if ($mysqli->connect_error){
            die("connection failed".$mysqli->connect_error);
            }
            $result = $mysqli->query($sql1);
            $array = array();

            if ($result->num_rows>0){
                while ($row = $result->fetch_assoc()) {
                    $array[]=$row;
                }
                $sfdata = json_encode($array);
                echo $sfdata;
                insertsf($sfdata);
            }
}
function insertsf($sfdata){

  $data = json_decode($sfdata,true);
  $data = $data[0];
  $id = $data['id'];
  $username = $data['username'];
  $userphone = $data['userphone'];
  $useraddress = $data['useraddress'];
  $productname = $data['productname'];
  $productqty = $data['productqty'];
  $productweight = $data['productweight'];
  $status = $data['status'];

  $sql2= "INSERT INTO `sforder`(`id`,`username`,`userphone`,`useraddress`,`productname`,`productqty`,`productweight`,`status`)VALUES('$id','$username','$userphone','$useraddress','$productname','$productqty','$productweight','$status')";
  $mysqli = new mysqli('localhost','root','','productdb');
  if ($mysqli->connect_error){
          die("connection failed".$mysqli->connect_error);
          }
          $result = $mysqli->query($sql2);
}

insert();
select();
#exit();

 ?>
