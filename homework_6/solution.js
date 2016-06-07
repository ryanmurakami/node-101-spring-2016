'use strict';

const http = require('http');
const url = require('url');

const protocol = 'http:';
const hostname = 'www.expedia.com';
const pathname = '/m/api/hotel/search';

module.exports.run = function(callback, location, startDate, numberOfNights) {
  const query = {
    room: 1
  };

  try {
    if (location) {
      if (Number(location)) {
        query.regionId = location;
      }
      else {
        query.city = location;
      }
    }
    else {
      throw new Error('A location is expected. Please pass a city or regionId parameter.');
    }

    if (startDate) {
      if (!(startDate instanceof Date)) {
        startDate = Date.parse(startDate);

        if (startDate) {
          startDate = new Date(startDate);
        }
        else {
          throw new Error('Expected a valid date object, string, or number');
        }
      }

      const startDateString = startDate.toISOString().replace(/T[^$]*$/, '');
      const curDate = new Date(Date.now()).toISOString().replace(/T[^$]*$/, '');

      if (new Date(startDateString) < new Date(curDate)) {
        throw new Error('Start date cannot be in the past');
      }

      query.checkInDate = startDateString;
    }
    else {
      throw new Error('Expected a startDate.');
    }

    if (!Number(numberOfNights)) {
      numberOfNights = 1;
    }

    startDate.setDate(startDate.getDate() + numberOfNights);
    query.checkOutDate = startDate.toISOString().replace(/T[^$]*$/, '');
  }
  catch (err) {
    return callback(err, query);
  }

  const searchCall = url.format({
    protocol,
    hostname,
    pathname,
    query
  });

  http.get(searchCall, (response) => {
    const json = [];

    response.setEncoding('utf8');
    response.on('data', chunk => json.push(chunk));
    response.on('end', () => callback(null, JSON.parse(json.join(''))));
  }).on('error', (err) => {
    callback(new Error(err));
  });
};
