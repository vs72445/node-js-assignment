const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let queryObject = url.parse(req.url, true).query;
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var age = currentYear - queryObject.year;
    res.write('<p>' + "Hello " + queryObject.name + '</p>');
    res.write('<p>' + "You are Currently " + age + " years old" + '</p>');
    res.end();
}).listen(6000)
console.log("Server started on port 6000");