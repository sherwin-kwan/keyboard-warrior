'use strict';
const models = require('../models');
const { HARD, NORMAL, ATTACK, HEAL, Arena } = models;
const { Op } = require('sequelize');
const inspect = require("util").inspect;

module.exports = {
  up: async (queryInterface) => {

    const diagon = await Arena.create({
      name: 'Diagon Alley',
      "difficulty_id": HARD,
      "challenger_name": 'Draco Malfoy',
      "challenger_sprite": 'malfoy.jpg',
      points: 30
    })
    const diagonId = diagon.dataValues.id;

    await queryInterface.bulkInsert('Words', [
      { arena_id: diagonId, action_id: ATTACK, word: "legilimens" },
      { arena_id: diagonId, action_id: ATTACK, word: "secrumsempra" },
      { arena_id: diagonId, action_id: ATTACK, word: "expulso" },
      { arena_id: diagonId, action_id: ATTACK, word: "stupefy" },
      { arena_id: diagonId, action_id: ATTACK, word: "confringo" },
      { arena_id: diagonId, action_id: ATTACK, word: "relashio" },
      { arena_id: diagonId, action_id: ATTACK, word: "reducto" },
      { arena_id: diagonId, action_id: ATTACK, word: "accio" },
      { arena_id: diagonId, action_id: ATTACK, word: "stupefy" },
      { arena_id: diagonId, action_id: ATTACK, word: "fiendfyre" },
      { arena_id: diagonId, action_id: ATTACK, word: "gryffindor" },
      { arena_id: diagonId, action_id: ATTACK, word: "hufflepuff" },
      { arena_id: diagonId, action_id: ATTACK, word: "ravenclaw" },
      { arena_id: diagonId, action_id: ATTACK, word: "slytherin" },
      { arena_id: diagonId, action_id: ATTACK, word: "galleon" },
      { arena_id: diagonId, action_id: ATTACK, word: "sickle" },
      { arena_id: diagonId, action_id: ATTACK, word: "knut" },
      { arena_id: diagonId, action_id: ATTACK, word: "phoenix" },
      { arena_id: diagonId, action_id: ATTACK, word: "buckbeak" },
      { arena_id: diagonId, action_id: ATTACK, word: "aragog" },
      { arena_id: diagonId, action_id: HEAL, word: "episkey" },
      { arena_id: diagonId, action_id: HEAL, word: "anapneo" },
      { arena_id: diagonId, action_id: HEAL, word: "occlumens" },
      { arena_id: diagonId, action_id: HEAL, word: "protego" },
      { arena_id: diagonId, action_id: HEAL, word: "expelliarmus" },
      { arena_id: diagonId, action_id: HEAL, word: "expecto patronum" },
      { arena_id: diagonId, action_id: HEAL, word: "langlock" },
      { arena_id: diagonId, action_id: HEAL, word: "repello" },
      { arena_id: diagonId, action_id: HEAL, word: "liberacorpus" },
      { arena_id: diagonId, action_id: HEAL, word: "rennervate" },
      { arena_id: diagonId, action_id: HEAL, word: "cloak" },
      { arena_id: diagonId, action_id: HEAL, word: "remembrall" },
      { arena_id: diagonId, action_id: HEAL, word: "goblet" },
      { arena_id: diagonId, action_id: HEAL, word: "sorting hat" },
      { arena_id: diagonId, action_id: HEAL, word: "pensieve" },
      { arena_id: diagonId, action_id: HEAL, word: "hogwarts" },
      { arena_id: diagonId, action_id: HEAL, word: "gringotts" },
      { arena_id: diagonId, action_id: HEAL, word: "floo" },
      { arena_id: diagonId, action_id: HEAL, word: "portkey" },
      { arena_id: diagonId, action_id: HEAL, word: "cauldron" },
    ]);

    const indigo = await Arena.create({
      name: 'Indigo Plateau', "difficulty_id": NORMAL, "challenger_name": 'Giovanni', points: 20, "challenger_sprite": 'Giovanni.jpg'
    })
    const indigoId = indigo.dataValues.id;

    await queryInterface.bulkInsert('Words', [
      { arena_id: indigoId, action_id: ATTACK, word: "peck" },
      { arena_id: indigoId, action_id: ATTACK, word: "thrash" },
      { arena_id: indigoId, action_id: ATTACK, word: "solar beam" },
      { arena_id: indigoId, action_id: ATTACK, word: "mega kick" },
      { arena_id: indigoId, action_id: ATTACK, word: "hydro pump" },
      { arena_id: indigoId, action_id: ATTACK, word: "blizzard" },
      { arena_id: indigoId, action_id: ATTACK, word: "clamp" },
      { arena_id: indigoId, action_id: ATTACK, word: "thunderbolt" },
      { arena_id: indigoId, action_id: ATTACK, word: "psychic" },
      { arena_id: indigoId, action_id: ATTACK, word: "drill peck" },
      { arena_id: indigoId, action_id: ATTACK, word: "horn attack" },
      { arena_id: indigoId, action_id: ATTACK, word: "gust" },
      { arena_id: indigoId, action_id: ATTACK, word: "wrap" },
      { arena_id: indigoId, action_id: ATTACK, word: "mega punch" },
      { arena_id: indigoId, action_id: ATTACK, word: "submission" },
      { arena_id: indigoId, action_id: ATTACK, word: "psybeam" },
      { arena_id: indigoId, action_id: ATTACK, word: "sludge" },
      { arena_id: indigoId, action_id: ATTACK, word: "karate chop" },
      { arena_id: indigoId, action_id: ATTACK, word: "cut" },
      { arena_id: indigoId, action_id: ATTACK, word: "vine whip" },
      { arena_id: indigoId, action_id: HEAL, word: "minimize" },
      { arena_id: indigoId, action_id: HEAL, word: "flash" },
      { arena_id: indigoId, action_id: HEAL, word: "double team" },
      { arena_id: indigoId, action_id: HEAL, word: "harden" },
      { arena_id: indigoId, action_id: HEAL, word: "disable" },
      { arena_id: indigoId, action_id: HEAL, word: "barrier" },
      { arena_id: indigoId, action_id: HEAL, word: "amnesia" },
      { arena_id: indigoId, action_id: HEAL, word: "confuse ray" },
      { arena_id: indigoId, action_id: HEAL, word: "haze" },
      { arena_id: indigoId, action_id: HEAL, word: "leech seed" },
      { arena_id: indigoId, action_id: HEAL, word: "sand attack" },
      { arena_id: indigoId, action_id: HEAL, word: "splash" },
      { arena_id: indigoId, action_id: HEAL, word: "withdraw" },
      { arena_id: indigoId, action_id: HEAL, word: "revive" },
      { arena_id: indigoId, action_id: HEAL, word: "berry juice" },
      { arena_id: indigoId, action_id: HEAL, word: "calcium" },
      { arena_id: indigoId, action_id: HEAL, word: "elixir" },
      { arena_id: indigoId, action_id: HEAL, word: "rare candy" },
      { arena_id: indigoId, action_id: HEAL, word: "iron" },
      { arena_id: indigoId, action_id: HEAL, word: "zinc" },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    const deletedRows = await Arena.destroy({
      // DELETE * FROM arenas WHERE name="Diagon Alley" OR name="Indigo Plateau"
      where: {
        [Op.or]: [{ name: 'Diagon Alley' }, { name: 'Indigo Plateau' }]
      }
    });
    console.log(`Deleted ${deletedRows} rows.`);
  }
};
