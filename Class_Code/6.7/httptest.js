var http = require('http');

var options = {
    protocol: 'http:',
    port: 80,
    hostname: 'www.expedia.com',
    path: '/',
    method: 'GET'
};

var req = http.request(options, function (res) {
    res.setEncoding('UTF-8');
    res.on('data', function (data) {
        console.log(data);
    });
});

req.on('error', function (e) {
    console.log(e);
});

req.end();

// with request
var request = require('request');

request.get('https://www.expedia.com', function (err, data) {
    if (err) throw err;
    console.log(data);
});