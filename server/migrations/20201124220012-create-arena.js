'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Arenas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      difficulty_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Difficulties', key: 'id' }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      arena_image: {
        type: Sequelize.STRING
      },
      points: {
        type: Sequelize.INTEGER
      },
      challenger_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      challenger_sprite: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Arenas');
  }
};