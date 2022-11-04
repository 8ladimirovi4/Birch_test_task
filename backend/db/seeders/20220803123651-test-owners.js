module.exports = {
  async up(queryInterface) {
    const names = ['Елена', 'Денис О.', 'Лена', 'Воображаемая Лена', 'Денис П.', 'Анатолий'];
    const owners = names.map((name) => ({
      name, // name: name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Owners', owners);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Owners');
  },
};
