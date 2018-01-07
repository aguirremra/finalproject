console.log('models/ is loaded');
module.exports = function(sequelize, DataTypes){
  var Product = sequelize.define("Product", {
    
    product_id: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.STRING
    },
    user_comment: {
      type: DataTypes.STRING
    }

  });

  return Product;
};