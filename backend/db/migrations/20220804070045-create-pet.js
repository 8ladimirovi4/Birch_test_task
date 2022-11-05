module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      label: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      typeid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'PetTypes', // название таблицы!
          key: 'id', // по умолчанию 'id', можно не писать
        },
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };

    await queryInterface.createTable('Pets', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Pets');
  },
};
