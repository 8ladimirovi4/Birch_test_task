module.exports = {
  async up(queryInterface) {
    const petTypeData = [
      { title: 'крыса', emoji: '🐭' },
      { title: 'кот/кошка', emoji: '🐱' },
      { title: 'пёс/собака', emoji: '🐶' },
      { title: 'попугай', emoji: '🦜' },
    ];
    const petTypes = petTypeData.map((type) => ({
      ...type,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    const petData = [
      { typeid: 1, label: 'task1' },
      { typeid: 2, label: 'task2' },
      { typeid: 3, label: 'task3' },
    ];
    const pets = petData.map((pet) => ({
      ...pet,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('PetTypes', petTypes);
    await queryInterface.bulkInsert('Pets', pets);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Pets');
    await queryInterface.bulkDelete('PetTypes');
  },
};
