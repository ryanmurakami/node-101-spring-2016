var inquire = require('./inquire'),
    api = require('./api'),
    parseHotel = require('./parseHotel'),
    beautify = require('./beautify');

inquire().then(function (answers) {    
    api.run(parseApiOutput, answers.regionId, answers.checkInDate, answers.checkOutDate);
});

function parseApiOutput(err, results) {
    beautify(parseHotel(results));
}