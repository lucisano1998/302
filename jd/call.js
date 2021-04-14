var ui = require("./ui");
var router = require("./router");
var server = require("./jd");

var map = {};
map["/list"] = ui.list;
map["/pay"] = ui.pay;
map["/cart"] = ui.cart;
map["/login"] = ui.login;
server.start( router.route, map );
