'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // Log migration SQL commands to console
    queryInterface.sequelize.options.logging = console.log;

    // SQL: ALTER TABLE battles ADD COLUMN score INTEGER
    await queryInterface.addColumn('Battles', 'score', { type: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Battles', 'score', {});
  }
};
