console.log('models/users is loaded');
module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User", {
    
    sub: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    nickname: {
      type: DataTypes.STRING
    }
  });

  return User;
};