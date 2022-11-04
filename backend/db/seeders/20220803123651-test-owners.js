module.exports = {
  async up(queryInterface) {
    const lables = ['Елена', 'Денис О.', 'Лена', 'Воображаемая Лена', 'Денис П.', 'Анатолий'];
    const owners = lables.map((lable) => ({
      lable, // name: name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Owners', owners);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Owners');
  },
};
