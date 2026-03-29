'use strict';

const { create } = require('../controllers/city-controller');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Rajmata Vijaya Raje Scindia Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gwl Airport',
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kota Airport',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
