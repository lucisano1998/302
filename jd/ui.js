var querystring = require("querystring");
var exec = require("child_process").exec;
var http = require("http");


function list(response, data) {
  var query = querystring.parse(data);
  var uname = query.username;
  var phone = query.userphone;
  //console.log(uname);
  var body = '<html>'+
   '<head>'+
   '<meta http-equiv="Content-Type" content="text/html; '+
   'charset=UTF-8" />'+
   '</head>'+
   '<body>'+
   '<div>'+
   '<h1>Welcome to JD! '+uname+'</h1><tr>'+
   '</div>'+
   '<div class="content">'+
   '<h2>Product List</h2>'+
      '<table border=1>'+
      '<tr>'+
      '<td>Name</td>'+
      '<td>Price</td>'+
      '<td>Weight</td>'+
      '<td>Made In</td>'+
      '<td>QTY</td>'+
      '<td></td>'+
      '</tr>'+
      '<tr>'+
   '<form action="/cart" method="post">'+
   "<td><input type='text' name='productname' value='Louis Vuitton' readonly></td>"+
   "<td><input type=text value='$2000' readonly></td>"+
   '<td><input type=text value="1.2" name="productweight" readonly></td>'+
   '<td><input type=text value="Paris" readonly></td>'+
   "<td><input type='number' value='1' name='productqty' min=0 max=10></td>"+
   "<input type='hidden' value='"+uname+"' name='username' >"+
   "<input type='hidden' value='"+phone+"' name='userphone' >"+
   "<td><input type='submit' value='AddToCart'></td>"+
   '</tr>'+
   '</form>'+
   '<tr>'+
   '<form action="/cart" method="post">'+
   "<td><input type='text' name='productname' value='Yeezy' readonly></td>"+
   "<td><input type=text value='$500' readonly></td>"+
   '<td><input type=text value="2.3" name="productweight" readonly></td>'+
   '<td><input type=text value="German" readonly></td>'+
   "<td><input type='number' value='1' name='productqty' min=0 max=10></td>"+
   "<input type='hidden' value='"+uname+"' name='username' >"+
   "<input type='hidden' value='"+phone+"' name='userphone' >"+
   "<td><input type='submit' value='AddToCart'></td>"+
   '</tr>'+
   '</form>'+
   '<tr>'+
   '<form action="/cart" method="post">'+
   "<td><input type='text' name='productname' value='ultraboost' readonly></td>"+
   "<td><input type=text value='$300' readonly></td>"+
   '<td><input type=text value="2.5" name="productweight" readonly></td>'+
   '<td><input type=text value="German" readonly></td>'+
   "<td><input type='number' value='1' name='productqty' min=0 max=10></td>"+
   "<input type='hidden' value='"+uname+"' name='username' >"+
   "<input type='hidden' value='"+phone+"' name='userphone' >"+
   "<td><input type='submit' value='AddToCart'></td>"+
   '</tr>'+
   '</form>'+
   '<tr>'+
   '<form action="/cart" method="post">'+
   "<td><input type='text' name='productname' value='RTX3080TI' readonly></td>"+
   "<td><input type=text value='$12000' readonly></td>"+
   '<td><input type=text value="3" name="productweight" readonly></td>'+
   '<td><input type=text value="China" readonly></td>'+
   "<td><input type='number' value='1' name='productqty' min=0 max=10></td>"+
   "<input type='hidden' value='"+uname+"' name='username' >"+
   "<input type='hidden' value='"+phone+"' name='userphone' >"+
   "<td><input type='submit' value='AddToCart'></td>"+
   '</tr>'+
   '</form>'+
   '</table>'+
   '</div>'+
   '</body>'+
   '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function pay(response, data){
  var options = {
    host: "localhost",
  	port: "8180",
    method: "POST",
    headers: {
        "Content-Type": "application/octet-stream"

      }
  };
  //console.log("uploaded");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Transaction Successful.");
  var query = querystring.parse(data);
  var body = JSON.stringify(query);
  //console.log(body);
  response.end();

  var req = http.request(options, function (res) {
    var responseString = "";

    res.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    res.on("end", function () {
        console.log(responseString);
        // print to console when response ends
    });
  });

  req.write(body);
  req.end();
  }

function login(response, data){
  var body = '<html>'+
  '<head>'+
    //'<link href="style.css" rel="stylesheet" type="text/css">'+
    //'<meta charset="utf-8">'+
    '<title>Login</title>'+
    //'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">'+
  '</head>'+
  '<body>'+
    '<div class="login">'+
      '<h1>Welcome to JD!</h1>'+
      '<h2>Please Login</h1>'+
      '<form action="/list" method="post">'+
        '<label for="username">'+
          //'<i class="fas fa-user"></i>'+
        '</label>'+
        '<input type="text" name="username" placeholder="Username" id="username" required><br>'+
        '<label for="password">'+
          //'<i class="fas fa-lock"></i>'+
        '</label>'+
        '<input type="text" name="userphone" placeholder="Telphone" id="phone" required>'+
        '<input type="submit" value="Login">'+
      '</form>'+
    '</div>'+
  '</body>'+
'</html>';
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}


function cart(response,data){
  var query = querystring.parse(data);
  var uname = query.username;
  var phone = query.userphone;
  var pdtname = query.productname;
  var pdtweight = query.productweight;
  var pdtqty = query.productqty;
  var body='<html>'+
  '<head></head>'+
  '<body>'+
  '<div id></div>'+
  '<form action="/pay" method="post">'+
  '<tr>'+
  '<td><h1>JD Product Detail</h1></td>'+
  '<table border=1>'+
  '<tr>'+
  '<td>Name</td>'+
  '<td>Phone</td>'+
  '<td>Product</td>'+
  '<td>Weight</td>'+
  '<td>QTY</td>'+
  '</tr>'+
  '<td>'+uname+'</td>'+
  '<td>'+phone+'</td>'+
  '<td>'+pdtname+'</td>'+
  '<td>'+pdtweight+'</td>'+
  '<td>'+pdtqty+'</td>'+
  '</tr>'+
  '</table>'+
  '<br/>'+
  '<h2>Please insert your delivery address.</h2>'+
  '<input type = textarea placeholder="Address" name="address">'+
  '<br/>'+
  "<input type=hidden name='productname' value='"+pdtname+"'>"+
  '<input type=hidden value="'+pdtweight+'" name="productweight">'+
  "<input type=hidden value='"+pdtqty+"' name='productqty'>"+
  "<input type=hidden value='"+uname+"' name='username' >"+
  "<input type=hidden value='"+phone+"' name='userphone' >"+
  '<input type="submit" value="Pay!">'+
  '</form>'+
  '</body>'+
  '</html>';
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
  }

exports.list = list;
exports.pay = pay;
exports.cart = cart;
exports.login = login;
