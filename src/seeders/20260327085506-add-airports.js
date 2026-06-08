"use strict";

const { create } = require("../controllers/city-controller");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airports",
      [
        // Delhi
        {
          name: "Indira Gandhi International Airport",
          address: "New Delhi",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Safdarjung Airport",
          address: "New Delhi",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Mumbai
        {
          name: "Chhatrapati Shivaji Maharaj International Airport",
          address: "Mumbai",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juhu Aerodrome",
          address: "Mumbai",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Navi Mumbai International Airport",
          address: "Navi Mumbai",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Bengaluru
        {
          name: "Kempegowda International Airport",
          address: "Bengaluru",
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HAL Airport",
          address: "Bengaluru",
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Chennai
        {
          name: "Chennai International Airport",
          address: "Chennai",
          cityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Hyderabad
        {
          name: "Rajiv Gandhi International Airport",
          address: "Hyderabad",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Kolkata
        {
          name: "Netaji Subhas Chandra Bose International Airport",
          address: "Kolkata",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Pune
        {
          name: "Pune International Airport",
          address: "Pune",
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Ahmedabad
        {
          name: "Sardar Vallabhbhai Patel International Airport",
          address: "Ahmedabad",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Jaipur
        {
          name: "Jaipur International Airport",
          address: "Jaipur",
          cityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Lucknow
        {
          name: "Chaudhary Charan Singh International Airport",
          address: "Lucknow",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
