var querystring = require("querystring");
var exec = require("child_process").exec;
var http = require("http");
var mysql = require("mysql");
var url = require("url");
var express = require("express");
var myParser = require("body-parser");
var app = express(); 



function view(response, _data) {
    var phone;
    


  
 

function test1 (phone,callback){

  var con = mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"",
      database:"productdb"
    });
    var sql = "SELECT * FROM sforder";
    //console.log(sql);
    
    con.connect(function(err) {
    
    if (err) throw err;
    //Select all customers and return the result object:
    //function conn(){
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
		test= result;
		var string=JSON.stringify(result);
		var data = JSON.parse(string)


		//console.log(data);
		var result2 = data;
		
	
        var table = '<table border=1>';
        table += '<tr>';
        table+= '<td>'+'id'+'</td>';
        table+= '<td>'+'username'+'</td>';
        table+= '<td>'+'userphone'+'</td>';
        table+= '<td>'+'useraddress'+'</td>';
        table+= '<td>'+'productname'+'</td>';
        table+= '<td>'+'productqty'+'</td>';
        table+= '<td>'+'productweight'+'</td>';
        table+= '<td>'+'status'+'</td>';
        table+= '</tr>';
      for (var quote of data){
        table += '<tr>';
        table+= '<td>'+quote.id+'</td>';
        table+= '<td>'+quote.username+'</td>';
        table+= '<td>'+quote.userphone+'</td>';
        table+= '<td>'+quote.useraddress+'</td>';
        table+= '<td>'+quote.productname+'</td>';
        table+= '<td>'+quote.productqty+'</td>';
        table+= '<td>'+quote.productweight+'</td>';
        table+= '<td>'+quote.status+'</td>';
        table+= '</tr>';
        
      };
      table+='</table>';
        var body = '<html>'+
        '<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>'+
        '<body>'+
        '<h1>SF Order List</h1><br>'+
        table+
        '</body>'+
        '</html>';
    
      
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    //console.log(body);
    response.end();
	
        


      
    });
    
    
    
  


    });
}
test1(phone,resql=>{
    jdata = jdata.replace('{${table}}',resql);
    
    
    
   












    








  });

}


exports.view = view;