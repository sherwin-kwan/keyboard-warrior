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

    // SQL: ALTER TABLE games ADD COLUMN win BOOLEAN
    await queryInterface.addColumn('Games', 'win', { type: Sequelize.BOOLEAN });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Games', 'win', {});
  }
};
