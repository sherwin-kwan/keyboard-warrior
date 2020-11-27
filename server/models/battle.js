'use strict';
const { Model } = require('sequelize');
const Game = require('./game');
const Arena = require('./arena');
const inspect = require('util').inspect;

module.exports = (sequelize, DataTypes) => {
  class Battle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Game);
      this.belongsTo(models.Arena);
    }
  };

  Battle.init({
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Game,
        key: 'id'
      }
    },
    arenaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Arena,
        key: 'id'
      }
    },
    win: DataTypes.BOOLEAN,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    time_seconds: {
      type: DataTypes.VIRTUAL,
      get() {
        console.log('GETTING ', this);
        return (this.end_time - this.start_time) / 1000;
      },
      set(value) {
        throw Error('Cannot set a virtual property');
      }
    },
    score: DataTypes.INTEGER,
  },
    {
      sequelize,
      hooks: {
        beforeSave: function(battle) {
          console.log('Saving a new battle', battle);
          return battle.getArena()
          .then(arena => console.log('Arena is: ', arena));
        }
      }
      ,
      modelName: 'Battle',
      underscored: true
    });
  return Battle;
};