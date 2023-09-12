"use strict"

const stages = [
  {
    stage_name: "Red Stage",
  },
  {
    stage_name: "Orange Stage",
  },
  {
    stage_name: "Yellow Stage",
  },
  {
    stage_name: "Green Stage",
  },
  {
    stage_name: "Blue Stage",
  },
  {
    stage_name: "Indigo Stage",
  },
  {
    stage_name: "Violet Stage",
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stages", stages, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stages", null, {})
  },
}
