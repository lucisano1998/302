function route(pathname, map, response, data) {
    //console.log("route() is called");

    if (typeof map[pathname] === 'function') {
        return map[pathname](response, data);
    } else {
        return "404 NOT FOUND";
    }
}

exports.route = route;
