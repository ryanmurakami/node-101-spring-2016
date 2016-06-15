var request = require('request');
var qs = require('querystring');

var domain = "http://www.expedia.com/m/api/hotel/search?"

module.exports = {
    run: function (callback, location, startDate, numberOfNights) {
        try {
            var params = {}
            var ONE_DAY = 1000*60*60*24;
            var locationQueryKey = "regionId";
            if (isNaN(location)) {
                params.city = location;
            } else {
                params.regionId = location;
            }

            var checkInDate;
            if (startDate instanceof Date) {
                checkInDate = startDate;
            } else {
                checkInDate = new Date(startDate);
            }
            var today = new Date();
            if (checkInDate.getTime() < today.getTime()) {
                throw new Error("Check in date are expected to be later than today");
            }
            params.checkInDate = checkInDate.toISOString().split("T")[0];

            var checkOutDate;
            if (numberOfNights && !isNaN(numberOfNights)) {
                checkOutDate = new Date(checkInDate.getTime() + ONE_DAY * numberOfNights);
            } else {
                checkOutDate = new Date(checkInDate.getTime() + ONE_DAY);
            }
            params.checkOutDate = checkOutDate.toISOString().split("T")[0];

            params.room = 1;

            var url = domain + qs.stringify(params);

            request.get(url, function(err, data, body){
                var result = JSON.parse(body);
                callback(null, result);
            });
        } catch (err) {
            callback(err);
        }
    }
}
