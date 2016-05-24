var request = require('request');

var testJSONUrl = 'https://www.expedia.com/m/api/hotel/search?priceType=TOTAL_PRICE&city=Seattle&checkInDate=2016-12-01&checkOutDate=2016-12-03&room=2';

function usesCallbackFunc(address, callback) {
    if (!callback || typeof callback !== 'function') {
        throw new Error('not a function');
    }
    request(address, callback);
}

// function normalFunc(err, response, body) {
//     if (err) throw err;
//     console.log(JSON.parse(body));
// }

usesCallbackFunc(testJSONUrl, function requestCallback(err, response, body) {
    if (err) throw err;
    throw new Error('where am i?');
    // console.log(JSON.parse(body));
});

// console.log(requestCallback);
console.log('done with sync ops');



// homework example

var hw4 = require('../homework_4/solution.js');
var hw4 = require('./homework_4.js');

module.exports.run = function(callback) {
    
};