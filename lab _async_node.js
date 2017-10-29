var http = require('http');

var request = require('request');
request ('https://blp.brainstation.io/student-content/NeSJO', function (error, response, body){
    console.log('error:', error); 
    console.log('statusCode:', response && response.statuCode);
    console.log('body:', body);
});