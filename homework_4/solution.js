var Hotel = require('./Hotel.js');

module.exports = function (jsonString) {
  var responseObj,
    returnArray = [];

  // try to parse string into JavaScript
  try {
    responseObj = JSON.parse(jsonString);
  } catch (err) {
    throw new Error('BAD JSON');
  }

  // check if responseObj is falsy or hotelList doesn't exist or is empty
  if (!responseObj || !responseObj.hotelList || !responseObj.hotelList.length) {
    return [];
  }

  // loop through hotel list and create Hotel objects
  for (var ix in responseObj.hotelList) {
    returnArray.push(new Hotel(responseObj.hotelList[ix]));
  }

  // // another way to do it using the Array.map() function
  // 
  // returnArray = responseObj.hotelList.map(function (obj) {
  //   return new Hotel(obj);
  // });

  return returnArray;
};
