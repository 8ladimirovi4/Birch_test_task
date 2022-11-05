module.exports = {
  async up (queryInterface) {
    const taskData = [
      {  label: 'task1' },
      {  label: 'task2' },
      {  label: 'task3' },
      {  label: 'task4' },
      {  label: 'task5' },
      {  label: 'task6' },
      {  label: 'task7' },
      {  label: 'task8' },
      {  label: 'task9' },
      {  label: 'task10' },
      
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
