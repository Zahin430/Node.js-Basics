//Importing the filesystem module and storing that in a variable fs
var fs =require('fs');

// Reading the file asynchronously
// Handing exception by using a throw statement
fs.readFile('message.txt', (err, data) => {
    if (err)
        throw err;
    
    console.log("Content : " + data);
});

