module.exports = {
  async up(queryInterface) {
    const petOwnerData = [
      { ownerId: 1, petId: 1 },
      { ownerId: 1, petId: 2 },
      { ownerId: 2, petId: 3 },
      { ownerId: 3, petId: 4 },
      { ownerId: 3, petId: 5 },
      { ownerId: 4, petId: 4 },
      { ownerId: 4, petId: 5 },
      { ownerId: 5, petId: 6 },
      { ownerId: 5, petId: 7 },
      { ownerId: 6, petId: 8 },
    ];
    const petOwners = petOwnerData.map((petOwner) => ({
      ...petOwner,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('PetOwners', petOwners);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('PetOwners');
  },
};
