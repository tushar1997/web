var http = require("http");
const REST_PORT = (process.env.PORT || 5000);

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});
   
   // Send the response body as "Hello World"
   response.end('<b><font color = "red" size = 20> Hey Folks..... I\'m going live....</font></b>\n');
}).listen(REST_PORT);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
