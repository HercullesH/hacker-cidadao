'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    Person.belongsTo(models.User);
  };
  return Person;
};