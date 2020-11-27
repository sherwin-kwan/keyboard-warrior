'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Associations between models are not to be confused with references between db tables in the migrations folder. The migrations  
      // handle how the database does things like cascading on delete, but these few lines of code make it possible for Sequelize to combine
      // tables. Just like how even if you've set up a database schema, when you do queries you still have to write JOIN on 

      this.hasMany(models.Word);
    }
  };
  Action.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    sound: DataTypes.STRING,
    animation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Action',
    underscored: true
  });
  return Action;
};