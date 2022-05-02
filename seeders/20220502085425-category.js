"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Comedy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Drama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Horror",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Action",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Westerns",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
