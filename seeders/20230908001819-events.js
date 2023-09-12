"use strict"

const events = [
  {
    name: "Sun Fest",
    date: new Date("2023-11-11T00:00:00Z"),
    start_time: new Date("2023-11-11T12:00:00Z"),
    end_time: new Date("2023-11-11T23:59:59Z"),
  },
  {
    name: "Moon Fest",
    date: new Date("2023-11-10T00:00:00Z"),
    start_time: new Date("2023-11-10T12:00:00Z"),
    end_time: new Date("2023-11-10T23:59:59Z"),
  },
  {
    name: "Star Fest",
    date: new Date("2023-11-09T00:00:00Z"),
    start_time: new Date("2023-11-09T12:00:00Z"),
    end_time: new Date("2023-11-09T23:59:59Z"),
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("events", events, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {})
  },
}

