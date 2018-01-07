import axios from 'axios';
const placesURL = ""
const placesKey = "AIzaSyCntC7u_9XoHw_F9SqoNVzjYGZAkPOvO2k"

export default {
	getPlaces: function(searchString){
		let params = searchString;
		console.log("searchStringstring " + baseURL + params);
		return axios.get(baseURL + params);		
	},
	getProducts: function(searchString){
		let params = searchString;
		console.log("searchStringstring " + baseURL + params);
		return axios.get(baseURL + params);		
	},
	//get all products from database
	getUsers: function(){
		return axios.get('/api/users');
	},
	//Save user to database
	saveUser: function(userData){
		return axios.post('/api/user', articleData);
	}
};