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
      { typeId: 1, name: 'Плюша' },
      { typeId: 1, name: 'Шиша' },
      { typeId: 2, name: 'Изольда' },
      { typeId: 3, name: 'Моя воображаемая собака' },
      { typeId: 2, name: 'Моя воображаемая кошка' },
      { typeId: 2, name: 'Феликс' },
      { typeId: 2, name: 'Кусама' },
      { typeId: 3, name: 'Лютик' },
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
