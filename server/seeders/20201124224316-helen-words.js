'use strict';
const models = require('../models');
const { HARD, NORMAL, ATTACK, HEAL, Arena } = models;
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

    const arenas = await queryInterface.bulkInsert('Arenas',
      [
        {
          name: "Middle Earth",
          difficulty_id: NORMAL,
          arena_image: "/images/middle-earth.jpg",
          points: 20,
          challenger_name: "The One Ring",
          challenger_sprite: "/images/middle-earth-challenger.jpg"
        },
        {
          name: "Billboard Hot 100",
          difficulty_id: HARD,
          arena_image: "/images/billboard.jpg",
          points: 30,
          challenger_name: "Usher",
          challenger_sprite: "/images/billboard-challenger.jpg"
        }
      ], { returning: true });

    await queryInterface.bulkInsert('Words',
      [
        { arena_id: arenas[0].id, action_id: ATTACK, word: "rohirrim" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "gandalf" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "you shall not pass" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "my precious" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "legolas" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "aragorn" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "gimli" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "boromir" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "faramir" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "frodo" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "meriadoc" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "pippin" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "samwise" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "saruman" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "elrond" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "arwen" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "eowyn" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "gollum" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "strider" },
        { arena_id: arenas[0].id, action_id: ATTACK, word: "bilbo" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "blessing" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "lembas bread" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "earendil" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "breakfast" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "second breakfast" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "rivendell" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "treebeard" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "galadriel" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "shire" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "eagles" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "baggins" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "sting" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "gondor" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "rohan" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "strawberries" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "elevenses" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "luncheon" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "fellowship" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "supper" },
        { arena_id: arenas[0].id, action_id: HEAL, word: "minas tirith" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "say my name" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "incomplete" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "independent women" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "lady marmalade" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "bootylicious" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "u got it bad" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "hot in herre" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "hey ya" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "hollaback girl" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "we belong together" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "gold digger" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "temperature" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "promiscuous" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "irreplaceable" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "girlfriend" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "umbrella" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "viva la vida" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "womanizer" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "single ladies" },
        { arena_id: arenas[1].id, action_id: ATTACK, word: "poker face" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "flo rida" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "lady gaga" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "beyonce" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "rihanna" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "50 cent" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "pink" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "coldplay" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "katy perry" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "mariah carey" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "alicia keys" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "kayne" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "fergie" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "avril lavigne" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "akon" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "ludacris" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "gwen stefani" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "outkast" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "kelly clarkson" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "nickleback" },
        { arena_id: arenas[1].id, action_id: HEAL, word: "madonna" },
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
      where: {
        [Op.or]: [{ name: "Middle Earth" }, { name: "Billboard Hot 100" }]
      }
    });
    console.log(`Deleted from arenas: ${deletedRows} rows.`);
  }
}
