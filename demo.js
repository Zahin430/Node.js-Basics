//simple-server-in-nodejs.js 						
var http = require('http');

//Mentioned host and port
var host = '127.0.0.1';
var port = 3000;

// Takes a callback function and executed each time a request is made
// request : which contains all the information related to client's request such as URL, custom headers , client info , etc.
// response : which is used to return the data back to the client.
// response.writeHead() to send status code and MIME type
// Prints server working
// response.end() is an inbuilt function which is used to tell the server that the request has been fulfilled
var server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  console.log("server Working");
  response.end('Server Working Success');
});


// server.listen() is an inbuilt method used to bind to the port an start listening for incoming connections. 
server.listen(port,host, (error) => {  
  if (error) {
    return console.log('Error occured : ', error );
  }

  console.log('server is listening on ' + host + ':'+ port);
});	