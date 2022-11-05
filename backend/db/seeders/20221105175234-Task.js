module.exports = {
  async up (queryInterface) {
    const taskData = [
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
    const tasks = taskData.map((task) => ({
      ...task,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Tasks', tasks);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Tasks');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
