var http = require("http");
var urlModule = require("url");
var mysql = require("mysql");
const QueryString = require("qs");
var express = require("express");
var app = new express;

function start(route, map) {
    function onRequest(request, response) {

        var pathname = urlModule.parse(request.url).pathname;
        //console.log(pathname);
        console.log("request received");

        var postData = "";
        request.addListener("data",
            function(uploadChunk) {  // main thread
                postData += uploadChunk;
            }
        );

        request.addListener("end",
            function() {  // main thread
                route(pathname, map, response, postData);
            }
        );
        var acknowledge = {actionitem: 'order', status: 'received'};
        var str_acknowledge = JSON.stringify(acknowledge);
        response.writeHead(200, {
            'Content-Type': 'text/json',
    		'Access-Control-Allow-Origin': '*',
    		'X-Powered-By':'nodejs'
        });
        if (request.method == 'POST' ) {
            whole = ''
            request.on('data', (chunk) => {
                // consider adding size limit here
                 
                whole += chunk.toString()
                //console.log(whole);
                if (whole.indexOf('=')>-1){
                    var query = QueryString.parse(whole);
                    //var js = JSON.stringify(query);
                    //var obj = Object.keys(query).length;
                    var checkphone = query.telphone;
                    //console.log(checkphone);
                    var options = {
                        host: "localhost",
                        method: "POST",
                        port:"8180", 
                        path: "ui_sf",
                        headers: {
                            "Content-Type": "application/octet-stream"
                        }
                    };
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
                    var reqbody = JSON.stringify(query);
                    req.write(reqbody);
                    req.end();
                };
                if (whole.indexOf(':')>-1){
                var query = JSON.parse(whole);
                console.log(query);
                var obj = Object.keys(query).length;
                //console.log(obj);
                var test = JSON.parse(whole);
                var address = test.address;
                var pdtname = test.productname;
                var pdtqty = test.productqty;
                var pdtweight = test.productweight;
                var urname = test.username;
                var tphone = test.userphone;
                var sql = "INSERT INTO `sforder`(`username`,`userphone`,`useraddress`,`productname`,`productqty`,`productweight`,`status`) VALUES ('"+urname+"','"+tphone+"','"+address+"','"+pdtname+"','"+pdtqty+"','"+pdtweight+"','processing')";
                //console.log(sql);
                

               var con = mysql.createConnection({
                host:"localhost",
                user:"root",
                password:"",
                database:"productdb"
           });
           
           con.connect(function(err){
               if (err) throw err;
               console.log("connected");
                con.query(sql, function(err,result){
                    if (err) throw err;
                    //console.log(result);
                });
               
                
            });
            }
           
                
            });
            
            request.on('end', () => {
                console.log(whole);
                response.writeHead(200, 'OK', {'Content-Type': 'text/html'})
                response.end()
            })
            
            
        };

        console.log('order received!');

        //
        
        

        
    }


    http.createServer(onRequest).listen(8180);
    console.log("server started");
}

exports.start = start;
