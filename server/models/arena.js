'use strict';
const { Model } = require('sequelize');
const Difficulty = require('./difficulty');

module.exports = (sequelize, DataTypes) => {
  class Arena extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Arena.init({
    name: { type: DataTypes.STRING, allowNull: false },
    difficulty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Difficulty,
        key: 'id'
      }
    },
    arena_image: DataTypes.STRING,
    points: DataTypes.INTEGER,
    challenger_name: { type: DataTypes.STRING, allowNull: false },
    challenger_sprite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Arena',
    underscored: true
  });
  return Arena;
};