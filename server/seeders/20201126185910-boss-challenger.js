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
          challenger_sprite: "/images/boss-challenger.jpg"
        }
      ], { returning: true });
    
      await queryInterface.bulkInsert('Words', 
        [
          { arena_id: arena[0].id, action_id: ATTACK, word: "we're no strangers to loveth" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "thee knoweth the rules and so doth i" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "a full commitment's what i'm bethinking of" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "thee wouldn't receiveth this from any other guy" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "i just wanna bid thee how i'm feeling" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "gotta maketh thee understand" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna giveth thee up" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna alloweth thee down" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna runneth around and desert thee" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna maketh thee cry" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna sayeth goodbye" },
          { arena_id: arena[0].id, action_id: ATTACK, word: "never gonna bid a forswear and did hurt thee" },
          { arena_id: arena[0].id, action_id: HEAL, word: "we've known each other for so longeth" },
          { arena_id: arena[0].id, action_id: HEAL, word: "they heart's been aching" },
          { arena_id: arena[0].id, action_id: HEAL, word: "but thou art too dainty to sayeth" },
          { arena_id: arena[0].id, action_id: HEAL, word: "inside we both knoweth what's been going on" },
          { arena_id: arena[0].id, action_id: HEAL, word: "we knoweth the game and we're gonna playeth" },
          { arena_id: arena[0].id, action_id: HEAL, word: "and if it be true thee asketh me how i'm feeling" },
          { arena_id: arena[0].id, action_id: HEAL, word: "bid not me thou art too blindeth to seeth" },
          { arena_id: arena[0].id, action_id: HEAL, word: "never gonna giveth thee up" },
          { arena_id: arena[0].id, action_id: HEAL, word: "never gonna alloweth thee down" },
          { arena_id: arena[0].id, action_id: HEAL, word: "never gonna runneth around and desert thee" },
          { arena_id: arena[0].id, action_id: HEAL, word: "never gonna sayeth goodbye" },
          { arena_id: arena[0].id, action_id: HEAL, word: "never gonna bid a forswear and did hurt thee" },
          { arena_id: arena[0].id, action_id: HEAL, word: "we've known each other for so longeth" },
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
