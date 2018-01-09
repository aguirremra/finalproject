console.log('models/places is loaded');
module.exports = function(sequelize, DataTypes){
  var Place = sequelize.define("Place", {
    
    place_id: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.STRING
    },
    user_comment: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    }

  });

  return Product;
}; 