'use strict';
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
        type: Sequelize.TEXT
      },
      taskid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tasks', // название таблицы!
          key: 'id', // по умолчанию 'id', можно не писать
        },
        onDelete: "cascade",
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