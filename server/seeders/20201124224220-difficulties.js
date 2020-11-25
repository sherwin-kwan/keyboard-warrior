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
    await queryInterface.bulkInsert('Difficulties', 
      [
        {
          name: "Normal",
          icon: "/images/green-diamond.png",
          attack_time_ms: 4000,
          damage_per_hit: 10
        },
        {
          name: "Hard",
          icon: "/images/yellow-diamond.png",
          attack_time_ms: 4000,
          damage_per_hit: 15
        },
        {
          name: "Boss",
          icon: "/images/red-diamond.png",
          attack_time_ms: 6000,
          damage_per_hit: 30
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
    return queryInterface.bulkDelete('Difficulties', null, {});
  }
};
