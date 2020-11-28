'use strict';
const models = require('../models');
const { BOSS, ATTACK, HEAL, Arena } = models;
const { Op } = require('sequelize');

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
    const arena = await queryInterface.bulkInsert('Arenas', 
      [
        {
          name: "Boss",
          difficulty_id: BOSS,
          arena_image: "/images/boss.jpg",
          points: 50,
          challenger_name: "Shakespeare",
          challenger_sprite: "/images/boss-challenger.png"
        }
      ], { returning: true });
    
      await queryInterface.bulkInsert('Words', 
        [
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna give thee up" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna alloweth thee down" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna runneth around" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna desert thee" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna maketh thee cry" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna sayeth goodbye" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna bid a forswear" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna hurt thee" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "we're nay strangers to love" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "thee know the rules and so doth i" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          { arena_id: arena[0].id, action_id: HEAL, word: "i'll never desert thee" },
          { arena_id: arena[0].id, action_id: HEAL, word: "i'll never giveth thee up" },
          { arena_id: arena[0].id, action_id: HEAL, word: "i'll never let thee down" },
          { arena_id: arena[0].id, action_id: HEAL, word: "i'll never runneth around" },
          { arena_id: arena[0].id, action_id: HEAL, word: "i'll never hurt thee" },
          { arena_id: arena[0].id, action_id: HEAL, word: "i'll never bid a forswear" },
          { arena_id: arena[0].id, action_id: HEAL, word: "we knoweth each other for so long" },
          { arena_id: arena[0].id, action_id: HEAL, word: "we both knoweth what's going on" },
          { arena_id: arena[0].id, action_id: HEAL, word: "we both knoweth the game" },
          { arena_id: arena[0].id, action_id: HEAL, word: "gotta make thee understand" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
          // { arena_id: arena[0].id, action_id: HEAL, word: "" },
        ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    const deletedRows = await Arena.destroy({
      // DELETE * FROM arenas WHERE name='Boss'
      where: {
        [Op.or]: [{ name: "Boss" }]
      }
    });
    console.log(`Deleted from arenas: ${deletedRows} rows`);
  }
};
