import { QueryInterface } from "sequelize";
module.exports = {
  async up (queryInterface: QueryInterface) {
   await queryInterface.sequelize.query(`
      Alter table hotels
      add column rating Decimal(3,2)default null,
      Add Column rating_count int default null
    `);
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      Alter table hotels
      drop column rating,
      drop column rating_count
      `);
  }
};
