'use strict';

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
    return queryInterface.bulkInsert('Words',
      [
        {
          "action": "attack",
          "word": "army",
        },
        {
          "action": "attack",
          "word": "dogs"
        },
        {
          "action": "attack",
          "word": "quest"
        },
        {
          "action": "attack",
          "word": "genie"
        },
        {
          "action": "attack",
          "word": "gentle"
        },
        {
          "action": "attack",
          "word": "flash"
        },
        {
          "action": "attack",
          "word": "speak"
        },
        {
          "action": "attack",
          "word": "hand"
        },
        {
          "action": "attack",
          "word": "door"
        },
        {
          "action": "attack",
          "word": "outside"
        },
        {
          "action": "heal",
          "word": "bottle"
        },
        {
          "action": "heal",
          "word": "sound"
        },
        {
          "action": "heal",
          "word": "boar"
        },
        {
          "action": "heal",
          "word": "eight"
        },
        {
          "action": "heal",
          "word": "kiln"
        },
        {
          "action": "heal",
          "word": "rule"
        },
        {
          "action": "heal",
          "word": "page"
        },
        {
          "action": "heal",
          "word": "queen"
        },
        {
          "action": "heal",
          "word": "light"
        },
        {
          "action": "heal",
          "word": "nose"
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
    return queryInterface.bulkDelete('Words', null, {});
  }
};
