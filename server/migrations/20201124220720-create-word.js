'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Words', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      word: {
        allowNull: false,
        type: Sequelize.STRING
      },
      arena_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Arenas', key: 'id' }
      },
      action_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Actions', key: 'id' }
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
    await queryInterface.dropTable('Words');
  }
};