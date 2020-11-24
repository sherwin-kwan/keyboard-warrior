'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Difficulty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Difficulty.init({
    name: DataTypes.STRING,
    attack_time_ms: DataTypes.INTEGER,
    damage_per_hit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Difficulty',
  });
  return Difficulty;
};