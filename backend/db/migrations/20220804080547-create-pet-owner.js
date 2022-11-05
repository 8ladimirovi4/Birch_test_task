module.exports = {
  async up(queryInterface, Sequelize) {
    const attributes = {
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Owners', // название таблицы!11
          key: 'id',
        },
        onDelete: "cascade",
      },
      petId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Pets', // название таблицы!11
          key: 'id',
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

    await queryInterface.createTable('PetOwners', attributes);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('PetOwners');
  },
};
