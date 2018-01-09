console.log("api-routes");
const apiController = require('../controllers/apiController')();
const path = require("path");

module.exports = function(app){

  app.get('/api/users', apiController.getUsers);

  app.post('/api/user', apiController.saveUser);

	// Define any API routes before this runs
	// app.use("*", function(req, res) {
	//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
	// });
  
}