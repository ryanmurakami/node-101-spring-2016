var getSearchResults = require('./get-search-results.js');
var makeHotelList = require('../homework_4/solution.js');

module.exports.run = function(resultCallback) {
  var json = '';
  var makeResponse = function(stringJson) {
    try {
      var json = makeHotelList(stringJson);
      resultCallback(null, json);
    }
    catch(err) {
      resultCallback(err, null);
    }
  };

  getSearchResults(makeResponse);
};
