'use strict';

const models = require('../models');
const { HARD, NORMAL, ATTACK, HEAL, Arena } = models;
const { Op } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const arenas = await queryInterface.bulkInsert('arenas', [
      {
        name: 'Animals',
        difficulty_id: NORMAL,
        arena_image: "/images/animals.jpg",
        points: 20,
        challenger_name: "Mutant Lion",
        challenger_sprite: "/images/animals-challenger.png"
      },
      {
        name: 'Palindromes',
        difficulty_id: NORMAL,
        arena_image: "/images/palindromes.jpg",
        points: 20,
        challenger_name: "The Grammar Police",
        challenger_sprite: "/images/palindromes-challenger.png"
      },
      {
        name: 'Countries',
        difficulty_id: HARD,
        arena_image: "/images/countries.jpg",
        points: 30,
        challenger_name: "Jupiter",
        challenger_sprite: "/images/countries-challenger.png"
      }

    ], { returning: true });

    const animalsId = arenas[0].id
    const palindromesId = arenas[1].id
    const countriesId = arenas[2].id

    await queryInterface.bulkInsert('words', [
      { arena_id: animalsId, action_id: ATTACK, word: "panda" },
      { arena_id: animalsId, action_id: ATTACK, word: "monkey" },
      { arena_id: animalsId, action_id: ATTACK, word: "whale" },
      { arena_id: animalsId, action_id: ATTACK, word: "shark" },
      { arena_id: animalsId, action_id: ATTACK, word: "mouse" },
      { arena_id: animalsId, action_id: ATTACK, word: "spider" },
      { arena_id: animalsId, action_id: ATTACK, word: "salmon" },
      { arena_id: animalsId, action_id: ATTACK, word: "crow" },
      { arena_id: animalsId, action_id: ATTACK, word: "lion" },
      { arena_id: animalsId, action_id: ATTACK, word: "zebra" },
      { arena_id: animalsId, action_id: ATTACK, word: "moose" },
      { arena_id: animalsId, action_id: ATTACK, word: "koala" },
      { arena_id: animalsId, action_id: ATTACK, word: "chicken" },
      { arena_id: animalsId, action_id: ATTACK, word: "beaver" },
      { arena_id: animalsId, action_id: ATTACK, word: "otter" },
      { arena_id: animalsId, action_id: ATTACK, word: "ant" },
      { arena_id: animalsId, action_id: ATTACK, word: "duck" },
      { arena_id: animalsId, action_id: ATTACK, word: "turkey" },
      { arena_id: animalsId, action_id: ATTACK, word: "lizard" },
      { arena_id: animalsId, action_id: ATTACK, word: "frog" },
      { arena_id: animalsId, action_id: HEAL, word: "tiger" },
      { arena_id: animalsId, action_id: HEAL, word: "cheetah" },
      { arena_id: animalsId, action_id: HEAL, word: "camel" },
      { arena_id: animalsId, action_id: HEAL, word: "bear" },
      { arena_id: animalsId, action_id: HEAL, word: "octopus" },
      { arena_id: animalsId, action_id: HEAL, word: "snake" },
      { arena_id: animalsId, action_id: HEAL, word: "sheep" },
      { arena_id: animalsId, action_id: HEAL, word: "raccoon" },
      { arena_id: animalsId, action_id: HEAL, word: "wombat" },
      { arena_id: animalsId, action_id: HEAL, word: "rabbit" },
      { arena_id: animalsId, action_id: HEAL, word: "wolf" },
      { arena_id: animalsId, action_id: HEAL, word: "horse" },
      { arena_id: animalsId, action_id: HEAL, word: "shark" },
      { arena_id: animalsId, action_id: HEAL, word: "iguana" },
      { arena_id: animalsId, action_id: HEAL, word: "parrot" },
      { arena_id: animalsId, action_id: HEAL, word: "penguin" },
      { arena_id: animalsId, action_id: HEAL, word: "seal" },
      { arena_id: animalsId, action_id: HEAL, word: "lemur" },
      { arena_id: animalsId, action_id: HEAL, word: "sloth" },
      { arena_id: animalsId, action_id: HEAL, word: "gorilla" },

      { arena_id: palindromesId, action_id: ATTACK, word: "gig" },
      { arena_id: palindromesId, action_id: ATTACK, word: "huh" },
      { arena_id: palindromesId, action_id: ATTACK, word: "mom" },
      { arena_id: palindromesId, action_id: ATTACK, word: "dad" },
      { arena_id: palindromesId, action_id: ATTACK, word: "pop" },
      { arena_id: palindromesId, action_id: ATTACK, word: "reviver" },
      { arena_id: palindromesId, action_id: ATTACK, word: "racecar" },
      { arena_id: palindromesId, action_id: ATTACK, word: "redder" },
      { arena_id: palindromesId, action_id: ATTACK, word: "bib" },
      { arena_id: palindromesId, action_id: ATTACK, word: "dvd" },
      { arena_id: palindromesId, action_id: ATTACK, word: "eye" },
      { arena_id: palindromesId, action_id: ATTACK, word: "nun" },
      { arena_id: palindromesId, action_id: ATTACK, word: "pup" },
      { arena_id: palindromesId, action_id: ATTACK, word: "sis" },
      { arena_id: palindromesId, action_id: ATTACK, word: "eve" },
      { arena_id: palindromesId, action_id: ATTACK, word: "dud" },
      { arena_id: palindromesId, action_id: ATTACK, word: "ewe" },
      { arena_id: palindromesId, action_id: ATTACK, word: "rotator" },
      { arena_id: palindromesId, action_id: ATTACK, word: "lol" },
      { arena_id: palindromesId, action_id: ATTACK, word: "gag" },
      { arena_id: palindromesId, action_id: HEAL, word: "noon" },
      { arena_id: palindromesId, action_id: HEAL, word: "peep" },
      { arena_id: palindromesId, action_id: HEAL, word: "sees" },
      { arena_id: palindromesId, action_id: HEAL, word: "toot" },
      { arena_id: palindromesId, action_id: HEAL, word: "did" },
      { arena_id: palindromesId, action_id: HEAL, word: "yay" },
      { arena_id: palindromesId, action_id: HEAL, word: "kayak" },
      { arena_id: palindromesId, action_id: HEAL, word: "civic" },
      { arena_id: palindromesId, action_id: HEAL, word: "level" },
      { arena_id: palindromesId, action_id: HEAL, word: "radar" },
      { arena_id: palindromesId, action_id: HEAL, word: "refer" },
      { arena_id: palindromesId, action_id: HEAL, word: "sagas" },
      { arena_id: palindromesId, action_id: HEAL, word: "solos" },
      { arena_id: palindromesId, action_id: HEAL, word: "stats" },
      { arena_id: palindromesId, action_id: HEAL, word: "rotor" },
      { arena_id: palindromesId, action_id: HEAL, word: "pullup" },
      { arena_id: palindromesId, action_id: HEAL, word: "madam" },
      { arena_id: palindromesId, action_id: HEAL, word: "tenet" },
      { arena_id: palindromesId, action_id: HEAL, word: "deed" },
      { arena_id: palindromesId, action_id: HEAL, word: "poop" },

      { arena_id: countriesId, action_id: ATTACK, word: "iceland" },
      { arena_id: countriesId, action_id: ATTACK, word: "jamaica" },
      { arena_id: countriesId, action_id: ATTACK, word: "kyrgyzstan" },
      { arena_id: countriesId, action_id: ATTACK, word: "madagascar" },
      { arena_id: countriesId, action_id: ATTACK, word: "malta" },
      { arena_id: countriesId, action_id: ATTACK, word: "pakistan" },
      { arena_id: countriesId, action_id: ATTACK, word: "korea" },
      { arena_id: countriesId, action_id: ATTACK, word: "norway" },
      { arena_id: countriesId, action_id: ATTACK, word: "poland" },
      { arena_id: countriesId, action_id: ATTACK, word: "senegal" },
      { arena_id: countriesId, action_id: ATTACK, word: "singapore" },
      { arena_id: countriesId, action_id: ATTACK, word: "sweden" },
      { arena_id: countriesId, action_id: ATTACK, word: "switzerland" },
      { arena_id: countriesId, action_id: ATTACK, word: "thailand" },
      { arena_id: countriesId, action_id: ATTACK, word: "venezuela" },
      { arena_id: countriesId, action_id: ATTACK, word: "zimbabwe" },
      { arena_id: countriesId, action_id: ATTACK, word: "vietnam" },
      { arena_id: countriesId, action_id: ATTACK, word: "mexico" },
      { arena_id: countriesId, action_id: ATTACK, word: "lithuania" },
      { arena_id: countriesId, action_id: ATTACK, word: "ireland" },
      { arena_id: countriesId, action_id: HEAL, word: "honduras" },
      { arena_id: countriesId, action_id: HEAL, word: "cyprus" },
      { arena_id: countriesId, action_id: HEAL, word: "azerbaijan" },
      { arena_id: countriesId, action_id: HEAL, word: "bangladesh" },
      { arena_id: countriesId, action_id: HEAL, word: "algeria" },
      { arena_id: countriesId, action_id: HEAL, word: "brazil" },
      { arena_id: countriesId, action_id: HEAL, word: "russia" },
      { arena_id: countriesId, action_id: HEAL, word: "australia" },
      { arena_id: countriesId, action_id: HEAL, word: "canada" },
      { arena_id: countriesId, action_id: HEAL, word: "belgium" },
      { arena_id: countriesId, action_id: HEAL, word: "germany" },
      { arena_id: countriesId, action_id: HEAL, word: "china" },
      { arena_id: countriesId, action_id: HEAL, word: "chile" },
      { arena_id: countriesId, action_id: HEAL, word: "denmark" },
      { arena_id: countriesId, action_id: HEAL, word: "el salvador" },
      { arena_id: countriesId, action_id: HEAL, word: "finland" },
      { arena_id: countriesId, action_id: HEAL, word: "guyana" },
      { arena_id: countriesId, action_id: HEAL, word: "guinea" },
      { arena_id: countriesId, action_id: HEAL, word: "france" },
      { arena_id: countriesId, action_id: HEAL, word: "hungary" },
    ])

  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */


    // Log migration SQL commands to console
    queryInterface.sequelize.options.logging = console.log;

    const deletedRows = await Arena.destroy({
      // DELETE * FROM arenas WHERE name="Diagon Alley" OR name="Indigo Plateau"
      where: {
        [Op.or]: [{ name: "Animals" }, { name: "Palindromes" }, { name: "Countries" }]
      }
    });
    console.log(`Deleted from arenas: ${deletedRows} rows.`);
  }
};