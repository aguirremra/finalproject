console.log('models/places is loaded');
module.exports = function(sequelize, DataTypes){
  var Place = sequelize.define("Place", {
    
    place_id: {
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
    city: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    }

  });

  return Place;
}; 