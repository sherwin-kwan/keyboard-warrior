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
      this.belongsTo(models.Difficulty);
      this.hasMany(models.Word);
      this.hasMany(models.Battle);
    }
  };
  Arena.init({
    name: { type: DataTypes.STRING, allowNull: false },
    difficultyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Difficulty,
        key: 'id'
      }
    },
    arena_image: {
      type: DataTypes.STRING,
      field: 'arena_image',
    },
    points: DataTypes.INTEGER,
    challenger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'challenger_name'
    },
    challenger_sprite: {
      type: DataTypes.STRING,
      field: 'challenger_sprite'
    }
  }, {
    sequelize,
    modelName: 'Arena',
    underscored: true
  });
  return Arena;
};