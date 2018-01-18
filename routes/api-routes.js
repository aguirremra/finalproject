console.log("api-routes");
const apiController = require('../controllers/apiController')();
const path = require("path");

module.exports = function(app){

//---------------------- From DB -----------------------------
  app.get('/api/users', apiController.getUsers);

  app.get('/api/favorites', apiController.getFavorites);

  app.get('/api/favproducts', apiController.getFavoriteProducts);

  app.get('/api/favplaces', apiController.getFavoritePlaces);

//----------------------- From API ---------------------------
  app.get('/api/products', apiController.getProducts);

  app.get('/api/places', apiController.getPlaces);

//---------------------- POST Requests -----------------------
  app.post('/api/user', apiController.saveUser);

  app.post('/api/saveproduct', apiController.saveProduct);

  app.post('/api/saveplace', apiController.savePlace);

    app.get('api/callback', function(req, res) {
      console.log('AUTH0 Called back', req.params);
    });
	// Define any API routes before this runs
	// app.use("*", function(req, res) {
	//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
	// });
  
}