"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "scoreboards",
      [
        {
          username: "Harry",
          score: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Ron",
          score: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Hermione",
          score: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("scoreboards", null, {});
  },
};
