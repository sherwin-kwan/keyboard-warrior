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
    difficultyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'difficulty_id',
      references: {
        model: Difficulty,
        key: 'id'
      }
    },
    arenaImage: {
      type: DataTypes.STRING,
      field: 'arena_image',
    },
    points: DataTypes.INTEGER,
    challengerName: { 
      type: DataTypes.STRING, 
      allowNull: false,
      field: 'challenger_name'
     },
    challengerSprite: {
      type: DataTypes.STRING,
      field: 'challenger_sprite'
    }
  }, {
    sequelize,
    modelName: 'Arena',
  });
  return Arena;
};