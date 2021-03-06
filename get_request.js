// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')               // Note 1
       .on('error', function (err) {                                   // Note 2
         console.log('Ooops, what happen?', err) 
       })
       .on('response', function (response) {                           // Note 3
         console.log('The Status is: ', response.statusCode, 'and the Content-type is:', response.headers['content-type']);
         console.log('We be downloading your pic.');

       })
       .on('end', function() {
         console.log('Your sweet jpg is done downloading, peace!');
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4
// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?
