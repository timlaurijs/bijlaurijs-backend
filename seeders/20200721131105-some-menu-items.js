"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "menus",
      [
        {
          item: "Vakantiehuis bij Laurijs. Welkom!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item: "Tot 4 of 6 gasten + baby. En de hond mag mee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item: "Binnen bij Laurijs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item: "Buiten bij Laurijs",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item: "De Achterhoek",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item: "Inhoudsopgave",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          item: "Locatie & contact",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("menus", null, {})
  },
}
