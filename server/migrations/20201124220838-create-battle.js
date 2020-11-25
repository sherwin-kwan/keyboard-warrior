'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Battles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      game_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Games', key: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      arena_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Arenas', key: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      win: {
        type: Sequelize.BOOLEAN
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {

    queryInterface.sequelize.options.logging = console.log;

    await queryInterface.dropTable('Battles');
  }
};