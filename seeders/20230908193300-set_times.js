"use strict"

const set_times = [
  {
    event_id: "1",
    band_id: "1",
    stage_id: "1",
    start_time: new Date("2023-11-11T15:00:00Z"),
    end_time: new Date("2023-11-11T20:59:59Z"),
  },
  {
    event_id: "2",
    band_id: "2",
    stage_id: "2",
    start_time: new Date("2023-11-10T15:00:00Z"),
    end_time: new Date("2023-11-10T20:59:59Z"),
  },
  {
    event_id: "3",
    band_id: "3",
    stage_id: "3",
    start_time: new Date("2023-11-09T15:00:00Z"),
    end_time: new Date("2023-11-09T20:59:59Z"),
  },
  {
    event_id: "1",
    band_id: "4",
    stage_id: "4",
    start_time: new Date("2023-11-11T15:00:00Z"),
    end_time: new Date("2023-11-11T20:59:59Z"),
  },
  {
    event_id: "2",
    band_id: "5",
    stage_id: "5",
    start_time: new Date("2023-11-10T15:00:00Z"),
    end_time: new Date("2023-11-10T20:59:59Z"),
  },
  {
    event_id: "3",
    band_id: "6",
    stage_id: "6",
    start_time: new Date("2023-11-09T15:00:00Z"),
    end_time: new Date("2023-11-09T20:59:59Z"),
  },
  {
    event_id: "3",
    band_id: "6",
    stage_id: "7",
    start_time: new Date("2023-11-09T15:00:00Z"),
    end_time: new Date("2023-11-09T20:59:59Z"),
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("set_times", set_times, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("set_times", null, {})
  },
}
