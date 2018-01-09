console.log("apiController");
var db = require("../models");

const controller = function() {

    this.getUsers = function(req, res){
        db.User.findAll({
        }).then(function(data){
          res.json(data);
          console.log("Data " + data);
        });
      };
    return this;
};


module.exports = controller;