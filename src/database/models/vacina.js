'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vacina = sequelize.define('Vacina', {
    dose: DataTypes.STRING,
    doenca: DataTypes.STRING,
    vacina: DataTypes.STRING
  }, {});
  Vacina.associate = function(models) {
    // associations can be defined here
  };
  return Vacina;
};