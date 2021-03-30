'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        name: 'Classical Melancholy',
        imgURL: 'Demo-lition',
        artistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Scarlatti: Sonatas',
        imgURL: 'Demo-lition',
        artistId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hilary Hahn plays Bach',
        imgURL: 'Demo-lition',
        artistId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};