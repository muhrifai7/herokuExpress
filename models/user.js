'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    telp: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.city, {
      foreignKey: 'createdBy'
    })
  };
  return user;
};