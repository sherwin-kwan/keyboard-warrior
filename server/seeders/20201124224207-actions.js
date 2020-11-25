'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // Log seeds to console
   queryInterface.sequelize.options.logging = console.log;

    await queryInterface.bulkInsert('Actions',
      [
        {
          name: "attack",
          icon: "/images/sword.png",
          sound: "attack sound",
          animation: "attack animation"
        },
        {
          name: "heal",
          icon: "/images/heart.png",
          sound: "heal sound",
          animation: "heal animation"
        }
      ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Actions', null, {});
  }
};
