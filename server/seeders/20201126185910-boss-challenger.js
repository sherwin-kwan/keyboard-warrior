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
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "giveth thee up" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "alloweth thee down" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "runneth around" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "and desert thee" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "maketh thee cry" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "sayeth goodbye" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "bid a forswear" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "and did hurt thee" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          // { arena_id: arena[0].id, action_id: ATTACK, word: "" },
          { arena_id: arena[0].id, action_id: HEAL, word: "we're no strangers" },
          { arena_id: arena[0].id, action_id: HEAL, word: "to loveth, thee" },
          { arena_id: arena[0].id, action_id: HEAL, word: "knoweth the rules" },
          { arena_id: arena[0].id, action_id: HEAL, word: "and so doth i" },
          { arena_id: arena[0].id, action_id: HEAL, word: "a full commiment is" },
          { arena_id: arena[0].id, action_id: HEAL, word: "what i'm bethinking of" },
          { arena_id: arena[0].id, action_id: HEAL, word: "thee wouldn't" },
          { arena_id: arena[0].id, action_id: HEAL, word: "receiveth this from" },
          { arena_id: arena[0].id, action_id: HEAL, word: "any other guy" },
          { arena_id: arena[0].id, action_id: HEAL, word: "i just wanna bid thee" },
          { arena_id: arena[0].id, action_id: HEAL, word: "how i'm feeling" },
          { arena_id: arena[0].id, action_id: HEAL, word: "gotta maketh" },
          { arena_id: arena[0].id, action_id: HEAL, word: "thee understand" },
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
