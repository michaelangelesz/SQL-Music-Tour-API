"use strict"

const set_times = [
  {
    stage_id: "1",
    event_id: "1",
  },
  {
    stage_id: "2",
    event_id: "2",
  },
  {
    stage_id: "3",
    event_id: "3",
  },
  {
    stage_id: "4",
    event_id: "1",
  },
  {
    stage_id: "5",
    event_id: "2",
  },
  {
    stage_id: "6",
    event_id: "3",
  },
  {
    stage_id: "7",
    event_id: "3",
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
