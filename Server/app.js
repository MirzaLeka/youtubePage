const hostname = "127.0.0.1";
const fs = require("fs");
const http = require("http");
const port = 3000;
//var popular = require("./index");
/*
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
});*/


fs.readFile("../Web-Info/index.html", (err, html) => {
if (err) {
throw err;
}

fs.readFile("../Resources/css/index.css", (err, css) => {

if (err) {
throw err;

}

});

const server = http.createServer((req, rest) => {

rest.statusCode = 200;
rest.setHeader("content-type", "text/html");
rest.write(html);
rest.end();

});

server.listen(port, hostname, () => {
console.log("Server started on port " + port);

});


});