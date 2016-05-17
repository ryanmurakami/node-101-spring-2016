# Week 4 Homework - Make a list of hotel items

## Objectives
1. Create a file named `solution.js`
2. Create a module that exports a function
  - It should accept one parameter of a String type.
  - e.g.
  ```js
  module.exports = function(jsonString) { ... }
  ```
3. The function should parse the string and create a valid JSON object
4. It should then return an array of hotel items with the object format of:
```json
{
  "id": "The ID of the hotel",
  "name": "The name of the hotel",
  "hotelAddress": {
    "address": "The street address of the hotel",
    "city": "The city the hotel is in",
    "state": "The state code of the hotel",
    "country": "The country of the hotel",
    "postalCode": "The zip code for the hotel"
  },
  "starRating": "The star rating for the hotel",
  "guestRating": "The guest rating for the hotel",
  "description": "The description of the hotel"
}
```
5. If the JSON is invalid it should throw an error with the message "BAD JSON"
6. If the JSON is valid but does not contain the expected hotel information, it should return an empty array.
7. Running ```test.js``` should pass successfully for your solution.

*******
We've included a JSON response that is used in the test. Here is the API call that returns that:
https://www.expedia.com/m/api/hotel/search?priceType=TOTAL_PRICE&city=Seattle&checkInDate=2016-12-01&checkOutDate=2016-12-03&room=2
