
// The variables http and fs imports http and file system module to use
// File I/O methods can be performed in both synchronous as well as asynchronous form depending upon the user requirements.
var http = require('http');
var fs = require('fs');

console.log('Server will listen at :  127.0.0.1:3000 ');

// Reading a File Asynchronously using nodejs
// Creates a server with port number assigned to 30000
// Writes the content type to application/pdf
// Calls the read file on the index.pdf and opens the file
// Using exceptions to handle error if no such file exists
// The response res then opens the pdf file
http.createServer( (req, res ) => {
	console.log("Port Number : 3000");
	// Change the MIME type to application/pdf
	res.writeHead(200, {"Content-Type": "application/pdf"});
	 
	fs.readFile('index.pdf', (error,data) => {
		if(error){
			res.json({'status':'error',msg:err});
		}else{			
			res.write(data);
			res.end();       
		}
	});
}).listen(3000);