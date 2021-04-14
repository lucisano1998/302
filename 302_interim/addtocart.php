<?php
function insert(){
  $pui1 = $_POST['hi1'];
  $pui2 = $_POST['hi2'];
  $pui3 = $_POST['hi3'];
  $pui4 = $_POST['hi4'];
  $pui5 = $_POST['hi5'];
  $pui6 = $_POST['hi6'];
  $pui7 = $_POST['hi7'];

  $sql=
  $sql= "INSERT INTO `order`(`id`,`username`,`userphone`,`useraddress`,`productname`,`productqty`,`productweight`) VALUES($pui1,$pui2,$pui3,$pui4,$pui5,$pui6,$pui7)";

  $mysqli = new mysqli('localhost','root','','jd');
  if ($mysqli->connect_error){
          die("connection failed".$mysqli->connect_error);
          }
          $result = $mysqli->query($sql);
}
 ?>
