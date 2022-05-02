"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questions",
      [
        {
          question: "What's Professor Jennings' first name in Animal House?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question:
            "What does Annie get a job as in the 2007 movie The Nanny Diaries?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "What was Scarlett Johansson's character's name?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "What movie is Cady Heron from?",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: "What decade did the movie Out of Sight come out?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: `Who played "Annie Hall" in the Woody Allen movie?`,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "Which film did Halle Berry win an Oscar for in 2001?",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: `What was the name of the pet mouse in "The Green Mile"?`,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: `Which 1983 Stephen King movie featured a car with a mind of its own?`,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: `Whose face is the mask of Michael Myers in "Halloween"?`,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: `Which horror movie is set at Camp Crystal Lake?`,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: `In what store does Ash (Bruce Campbell) work in "Army of Darkness"?`,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: `What character did Demi Moore play in "Charlie's Angels: Full Throttle"?`,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: `How many Indiana Jones movies were there?`,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: `Arnold Schwarzenegger's famous line "I'll Be Back" is from which classic action film?`,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          question: `In the sci-fi action movie The Matrix, does Neo take the red pill or the blue pill?`,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questions", null, {});
  },
};
