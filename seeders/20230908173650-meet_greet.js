"use strict"

const meet_greet = [
  {
    band_id: "1",
    event_id: "1",
    meet_start_time: new Date("2023-11-11T15:00:00Z"),
    meet_end_time: new Date("2023-11-11T20:59:59Z"),
  },
  {
    band_id: "2",
    event_id: "2",
    meet_start_time: new Date("2023-11-10T15:00:00Z"),
    meet_end_time: new Date("2023-11-10T20:59:59Z"),
  },
  {
    band_id: "3",
    event_id: "3",
    meet_start_time: new Date("2023-11-09T15:00:00Z"),
    meet_end_time: new Date("2023-11-09T20:59:59Z"),
  },
  {
    band_id: "4",
    event_id: "1",
    meet_start_time: new Date("2023-11-11T15:00:00Z"),
    meet_end_time: new Date("2023-11-11T20:59:59Z"),
  },
  {
    band_id: "5",
    event_id: "2",
    meet_start_time: new Date("2023-11-10T15:00:00Z"),
    meet_end_time: new Date("2023-11-10T20:59:59Z"),
  },
  {
    band_id: "6",
    event_id: "3",
    meet_start_time: new Date("2023-11-09T15:00:00Z"),
    meet_end_time: new Date("2023-11-09T20:59:59Z"),
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("meet_greet", meet_greet, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("meet_greet", null, {})
  },
}
