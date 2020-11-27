'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Difficulty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here  
      this.hasMany(models.Arena);
    }
  };
  Difficulty.init({
    name: { type: DataTypes.STRING, allowNull: false },
    attack_time_ms: { type: DataTypes.INTEGER, allowNull: false },
    damage_per_hit: { type: DataTypes.INTEGER, allowNull: false },
    icon: { type: DataTypes.STRING },
    par_time: {
        // For the amount of time (in seconds) the challenger would take to kill the player (deal 100 damage), assuming no heals
        // This represents the baseline "par time", beating this time (meaning you were able to win without healing) gives you bonus points
      type: DataTypes.VIRTUAL,
      get() {
        return this.attack_time_ms * Math.ceil(100 / this.damage_per_hit) / 1000;
      },
      set(value) {
        throw Error('Cannot set a virtual property');
      }
    }
  }, {
    sequelize,
    modelName: 'Difficulty',
    underscored: true
  });
  return Difficulty;
};