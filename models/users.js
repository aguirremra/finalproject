console.log('models/users is loaded');
module.exports = function(sequelize, DataTypes){
  var User = sequelize.define("User", {
    
    sub: {
      type: DataTypes.STRING
    }

  });

  return User;
};