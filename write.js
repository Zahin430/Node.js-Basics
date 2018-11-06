var fs = require('fs');
var content = "Creating an apacheB";

//Asynchrnous file writing
fs.writeFile('message.txt', content, (err) => {
    if(err)
        throw err;
    console.log('It\'s saved!!!');
});