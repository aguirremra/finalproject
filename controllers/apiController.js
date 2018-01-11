console.log("apiController");
var db = require("../models");
const googlePlaceService = require('../providers/googlePlaceService.js')();

const controller = function() {

    this.getUsers = function(req, res){
        db.User.findAll({
        }).then(function(data){
          res.json(data);
          console.log("Data " + data);
        });
      };

    this.saveUser = function(req, res){
        db.User.update(
          req.body,
            {
              where: {
                  id: req.params.id
              }
        }).then(function(data){
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
     
    }    
    return this;
};


module.exports = controller;