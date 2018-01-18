console.log("apiController");
var db = require("../models");
const googlePlaceService = require('../providers/googlePlaceService.js')();
const productService = require('../providers/productService.js')();
let parseString = require('xml2js').parseString;

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
      const userID = req.query.user_id;
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

// get all favorite places regardless of user
    this.getFavoritePlaces = function(req, res) {
      db.Place.findAll().then(function(data){
        res.json(data);
        console.log("Data " + data);
      });
    };

// get all favorite products regardless of user
    this.getFavoriteProducts = function(req, res) {
      db.Product.findAll().then(function(data){
        res.json(data);
        console.log("Data " + data);
      });
    };

// Adds user to User table when use OAuth for first time
    this.saveUser = function(req, res){
      const userID = req.query.sub;
      console.log("This is the userID: " + userID)
// Check to see if already exists
        db.User.findOrCreate({
          where: {
            sub: userID
          }
        })
        .spread(function(userResult, created){
          if (!created){
            console.log("User exists");
            res.end();
          }
          else {
            db.User.create(req.body).then(function(data){
              console.log("Req.body: " + req.body)
              res.json(data);
              console.log("User created - Data: " + data);
            });
          }     
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

    this.getProducts = function(req, res) {
      let q = req.query.q;
      let promise = productService.fetchProducts(q);
      console.log("Promise: ", promise);
      promise.then(
        result => {
          // console.log('RESPONSE - AmazonProduct', result);
          let productResponse;
          parseString(result.responseBody, function(err, xml2JSresult) {
              if (err) { console.log('ERR - Something went wrong parsing XML', err); }
              productResponse = xml2JSresult;
          });
          console.log('RESPONSE - AmazonProduct', productResponse);
          console.log("type response data: ",typeof productResponse);
          // console.log("Product Brand:", productResponse.ItemSearchResponse.Items[0].Item[1].ItemAttributes[0].Brand[0]);
          // console.log("Product Title:", productResponse.ItemSearchResponse.Items[0].Item[1].ItemAttributes[0].Title[0]);
          // console.log("List Price:", productResponse.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].ListPrice[0].FormattedPrice[0]);
          // console.log("UPC:", productResponse.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].UPC[0]);
          // console.log("Category:", productResponse.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].Binding[0]);
          // console.log("Small Image:", productResponse.ItemSearchResponse.Items[0].Item[0].SmallImage[0].URL[0]);
          // console.log("Medium Image:", productResponse.ItemSearchResponse.Items[0].Item[2].MediumImage[0].URL[0]);
          // console.log("Large Image:", productResponse.ItemSearchResponse.Items[0].Item[2].LargeImage[0].URL[0]);
          res.json(productResponse.ItemSearchResponse.Items[0]);
        })
      .catch(
        err => {
          console.log('The request to Amazon failed', err);
          res.json({
            error: err,
            message: 'The request to Amazon failed'
          });
        })     
    };
    
    return this;
};


module.exports = controller;