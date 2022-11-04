module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Owners',
      'surname',
      Sequelize.TEXT,
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(
      'Owners',
      'surname',
    );
  },
};
