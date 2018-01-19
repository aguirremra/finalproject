import axios from 'axios';

export default {
	//get all products from database
	getUsers: function(){
		return axios.get('/api/users');
	},
	getFavorites: function(){
		return axios.get('/api/favorites');
	},
	getFavPlaces: function(){
		return axios.get('/api/favplaces');
	},
	getFavProducts: function(){
		return axios.get('/api/favproducts');
	},
	getPlaces: function(searchString){
		return axios.get('/api/places?q=' + searchString);
	},
	getProducts: function(searchString){
		return axios.get('/api/products?q=' + searchString);
	},
	//Save user to database
	saveUser: function(userData){
		return axios.post('/api/user', userData);
	},
	saveProduct: function(productData){
		return axios.post('/api/saveproduct', productData);
	},
	savePlace: function(placeData){
		return axios.post('api/saveplace', placeData);
	}
};