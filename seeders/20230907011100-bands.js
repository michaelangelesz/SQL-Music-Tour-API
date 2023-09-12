"use strict"

const bands = [
  {
    name: "Stereolab",
    genre: "Experimental",
    available_start_time: new Date("2023-11-11T18:00:00Z"),
    end_time: new Date("2023-11-11T23:59:59Z"),
  },
  {
    name: "Beach House",
    genre: "Dream Pop",
    available_start_time: new Date("2023-11-10T18:00:00Z"),
    end_time: new Date("2023-11-10T23:59:59Z"),
  },
  {
    name: "Beirut",
    genre: "Alt Folk Pop",
    available_start_time: new Date("2023-11-09T18:00:00Z"),
    end_time: new Date("2023-11-09T23:59:59Z"),
  },
  {
    name: "Aphex Twin",
    genre: "IDM/Experimental",
    available_start_time: new Date("2023-11-11T12:00:00Z"),
    end_time: new Date("2023-11-11T17:59:59Z"),
  },
  {
    name: "Tame Impala",
    genre: "Psychedelic Rock",
    available_start_time: new Date("2023-11-10T12:00:00Z"),
    end_time: new Date("2023-11-10T17:59:59Z"),
  },
  {
    name: "Beach Fossils",
    genre: "Indie Rock",
    available_start_time: new Date("2023-11-09T12:00:00Z"),
    end_time: new Date("2023-11-09T17:59:59Z"),
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("bands", bands, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bands", null, {})
  },
}
