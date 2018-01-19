console.log('models/products is loaded');
module.exports = function(sequelize, DataTypes){
  var Product = sequelize.define("Product", {
    
    product_id: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.STRING
    },
    user_nickname: {
      type: DataTypes.STRING
    },
    user_image: {
      type: DataTypes.STRING
    },
    user_comment: {
      type: DataTypes.STRING
    },         
    name: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.STRING
    }
  });

  return Product;
}; 