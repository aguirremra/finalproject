// Dependencies
// =============================================================
// References the standard library:
var Sequelize = require("sequelize");
// References our connection to the DB:
var sequelize = require("../config/connection.js");
// Creates a "Chirp" model that matches up with DB
var User = sequelize.define("user", {
  name: {
    type: Sequelize.STRING
  },
  sub: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});
// Syncs with DB
Chirp.sync();
// Makes the Chirp Model available for other files (will also create a table)
module.exports = Chirp;