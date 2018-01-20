console.log('googlePlaceServices');
let axios = require('axios');
const baseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="
const baseDetailsURL = "https://maps.googleapis.com/maps/api/place/details/json?placeid="
const APIKey = "&key=AIzaSyCntC7u_9XoHw_F9SqoNVzjYGZAkPOvO2k"

const googleProvider = function(){
	this.fetchPlaces = function(searchString){
    // make axios call to google places
    let params = searchString;
		console.log("searchStringstring " + baseURL + params + APIKey);
		return axios.get(baseURL + params + APIKey);	    
	}

	this.fetchPlaceDetails = function(placeId){
		let params = placeId;
		console.log("Detail Search String " + baseDetailsURL + params + APIKey);
		return axios.get(baseDetailsURL + params + APIKey);
	}
	return this;
};

module.exports = googleProvider;