import axios from 'axios';

export default {
	//get all products from database
	getUsers: function(){
		return axios.get('/api/users');
	},
	//Save user to database
	saveUser: function(userData){
		// return axios.post('/api/user', articleData);
	},
	getPlaces: function(searchString){
		return axios.get('/api/places?q=' + searchString);
	},
	getProducts: function(searchString){
		return axios.get('/api/products?q=' + searchString);
	}
};