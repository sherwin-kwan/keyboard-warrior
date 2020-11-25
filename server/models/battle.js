'use strict';
const { Model } = require('sequelize');
const Game = require('./game');
const Arena = require('./arena');

module.exports = (sequelize, DataTypes) => {
  class Battle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Battle.init({
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Game,
        key: 'id'
      }
    },
    arena_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Arena,
        key: 'id'
      }
    },
    win: DataTypes.BOOLEAN,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Battle',
    underscored: true
  });
  return Battle;
};