module.exports = function (hotelObj) {
  this.id = hotelObj.hotelId;
  this.name = hotelObj.name;
  this.hotelAddress = {};
  this.hotelAddress.address = hotelObj.address;
  this.hotelAddress.city = hotelObj.city;
  this.hotelAddress.state = hotelObj.stateProvinceCode;
  this.hotelAddress.country = hotelObj.countryCode;
  this.hotelAddress.postalCode = hotelObj.postalCode;
  this.starRating = hotelObj.hotelStarRating;
  this.guestRating = hotelObj.hotelGuestRating;
  this.description = hotelObj.shortDescription;
};
