var getSearchResults = require('./get-search-results.js');
var makeHotelList = require('../homework_4/solution.js');

function run (resultCallback) {

  var makeResponse = function (stringJson) {
    try {
      var jsObj = makeHotelList(stringJson);
      resultCallback(null, jsObj);
    } catch (err) {
      resultCallback(err);
    }
  };

  getSearchResults(makeResponse);
};

module.exports = {
  run: run
};