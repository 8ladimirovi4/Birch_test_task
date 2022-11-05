module.exports = {
  async up(queryInterface) {
    const petTypeData = [
      { title: 'крыса', emoji: '🐭' },
      { title: 'кот/кошка', emoji: '🐱' },
      { title: 'пёс/собака', emoji: '🐶' },
      { title: 'попугай', emoji: '🦜' },
      { title: 'q', emoji: 'q' },
      { title: 'w', emoji: 'w' },
      { title: 'e', emoji: 'e' },
      { title: 'r', emoji: 'r' },
      { title: 't', emoji: 't' },
      { title: 'y', emoji: 'y' },
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
      { typeid: 4, label: 'task4' },
      { typeid: 5, label: 'task5' },
      { typeid: 6, label: 'task6' },
      { typeid: 7, label: 'task7' },
      { typeid: 8, label: 'task8' },
      { typeid: 9, label: 'task9' },
      { typeid: 10, label: 'task10' },
      
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
