console.log("apiController");
var db = require("../models");
const googlePlaceService = require('../providers/googlePlaceService.js')();

const controller = function() {

// People page
  // Load all users initially
    this.getUsers = function(req, res){
      db.User.findAll().then(function(data){
        res.json(data);
        console.log("Data " + data);
      });
    };
  // Load all products and places for user that is clicked on
    this.getFavorites = function(req, res){
      const userID = req.query.user_id
      let result = {};
      let p1 = db.Place.findAll({ 
          where: { 
            user_id: userID 
          } 
        }).then(function(placeData){
          console.log("userID: " + userID)
          console.log("place data: " + placeData)
          result.places = placeData;
        });

        let p2 = db.Product.findAll({ 
          where: { 
            user_id: userID 
          } 
        }).then(function(productData){
          console.log("userID: " + userID)
          console.log("product data: " + productData)
          result.products = productData;
        });

        let promises = [ p1, p2 ];
        Promise.all(promises).then(
          fin => {
            res.json(result);
          })
        .catch(err => {
          res.status(500).json({
            data: result,
            err: err,
            message: 'Something went wrong fetching the User Data'
          });
        });
    };

// Adds user to User table when use OAuth for first time
// TO DO: add check to see if already exists
    this.saveUser = function(req, res){
      db.User.create(req.body).then(function(data){
        res.json(data);
        console.log("Data " + data);
      });
    };      

    this.getPlaces = function(req, res) {
      let q = req.query.q;
      let promise = googlePlaceService.fetchPlaces(q);
      promise.then(
        result => {
          console.log('RESPONSE - GooglePlaces', result.data);
          res.json(result.data);
        })
      .catch(
        err => {
          console.log('The request to GooglePlaces failed', err);
          res.json({
            error: err,
            message: 'The request to GooglePlaces failed'
          });
        })
    };      
    return this;
};


module.exports = controller;