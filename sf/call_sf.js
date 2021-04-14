var ui = require("./trytry");
var router = require("./router");
var server = require("./sf");


var map = {};
map["/view"] = ui.view;
//map["/tony"] = ui.tony;
server.start( router.route, map );
