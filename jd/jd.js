var http = require("http");
var urlModule = require("url");
//var mysql = require("mysql");


function start(route, map) {
    function onRequest(request, response) {
        var pathname = urlModule.parse(request.url).pathname;
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

       /*var con = mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"productdb"
       });
       
       con.connect(function(err){
           if (err) throw err;
           console.log("connected");
           var sql = "INSERT INTO `sforder`(`username`,`userphone`,`useraddress`,`productname`,`productqty`,`productweight`,`status`) VALUES "
       });*/
    }

    http.createServer(onRequest).listen(8888);
    console.log("server started");
}

exports.start = start;
