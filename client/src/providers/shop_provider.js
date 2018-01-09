import axios from 'axios';
const baseURL = ""
const APIKey = "AIzaSyCntC7u_9XoHw_F9SqoNVzjYGZAkPOvO2k"

export default {
	getProducts: function(searchString){
		let params = searchString;
		console.log("searchStringstring " + baseURL + params);
		return axios.get(baseURL + params);		
	}
};