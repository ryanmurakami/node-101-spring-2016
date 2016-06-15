var colors = require("colors");

function HotelParser(jsonString) {
    
    this.hotelInfoJson = jsonString; 
    
    this.parse = function () { 
        var parsedHotelInfo = parseHotelInfoFromJson();
        
        var hotelList = verify(parsedHotelInfo.hotelList);
        return hotelList;
    }
    
    function verify(hotelList) {
        var hotelInformation = [];
        
        if (!hotelList) {
            return hotelInformation;
        }
        //for (var hotel in hotelList) {
        //hotelList.foreach(function (hotel) {
        for(var idx = 0, hotel; idx < hotelList.length; ++idx) {
            hotel = hotelList[idx];
            if (! (hotel.hotelId || hotel.name ||
                    hotel.address || hotel.city || hotel.stateProvinceCode || hotel.countryCode || hotel.postalCode ||
                    hotel.hotelStarRating || hotel.hotelGuestRating || hotel.shortDescription )) {
                break;
            }
            
            hotelInformation.push(
                new HotelInformation(
                    hotel.hotelId, hotel.name, 
                    hotel.address, hotel.city, hotel.stateProvinceCode, hotel.countryCode, hotel.postalCode,
                    hotel.hotelStarRating, hotel.hotelGuestRating, hotel.shortDescription));
        }
        return hotelInformation;
    }
    
    function parseHotelInfoFromJson() {
        var parsedHotelInfo;
        try {
            parsedHotelInfo = JSON.parse(jsonString);
        } catch (error) {
            throw new Error("BAD JSON");
        }
        return parsedHotelInfo;
    }
}

function HotelInformation(  id, name, 
                            address, city, state, country, postalCode, 
                            starRating, guestRating, description) {
    this.id = id;
    this.name = name;
    this.hotelAddress = new HotelAddress(address, city, state, country, postalCode);
    this.starRating = starRating;
    this.guestRating = guestRating;
    this.description = description;
    
    function HotelAddress(address, city, state, country, postalCode) {
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
    }
}


module.exports = function(jsonString) {
    var hotelParser = new HotelParser(jsonString);
    return hotelParser.parse();
}