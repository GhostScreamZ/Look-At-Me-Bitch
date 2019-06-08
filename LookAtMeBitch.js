const http = require('http');
const requestIp = require('request-ip');

console.log("                               $$    ");
console.log("                               $$    ");
console.log("                               $$    ");
console.log("                               $$    ");
console.log("                               $$    ");
console.log("                               $$    ");
console.log("                               $$    ");
console.log("                               $$    ");
console.log("                           $$$$$$$$$$$   ");
console.log("                               $$    ");
console.log("                               $$    ");
console.log("                       [Look At Me Bitch]");

http.createServer((req, res) => {
var ipMiddleware = function(req, res, next) {
    var clientIp = requestIp.getClientIp(req);
    next();
};
    console.log("Url: " + req.url);
    console.log("Request type: " + req.method);
    console.log("User-Agent: " + req.headers["user-agent"]);
    console.log("All headlines:");
    console.log(req.headers);
     res.writeHead(200, { 'Content-Type': 'text/html'});
     res.end(`<!DOCTYPE html>
<html>

     <head>
          <title>404 | Not Found</title>
          <style>
               body{ margin:0; text-align:center; font-size:200%; }
          </style>
     </head>

     <body>
          <strong><h1>404 Not Found</h1></strong>
     </body>

</html>`);
}).listen(3000, () => console.log('[INFO]Server work'));
