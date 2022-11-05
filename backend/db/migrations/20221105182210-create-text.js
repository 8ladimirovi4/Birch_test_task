module.exports = {
  async up(queryInterface, Sequelize) {
   const attributes ={
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
      await queryInterface.createTable('Texts', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Texts');
  }
};