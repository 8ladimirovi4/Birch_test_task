module.exports = {
  async up (queryInterface) {
    const textData = [
      { taskid: 1, text: 'lorem1' },
      { taskid: 2, text: 'lorem2' },
      { taskid: 3, text: 'lorem3' },
      { taskid: 4, text: 'lorem4' },
      { taskid: 5, text: 'lorem5' },
      { taskid: 6, text: 'lorem6' },
      { taskid: 7, text: 'lorem7' },
      { taskid: 8, text: 'lorem8' },
      { taskid: 9, text: 'lorem9' },
      { taskid: 10, text: 'lorem10' },
      
    ];
    const text = textData.map((text) => ({
      ...text,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Texts', text);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Texts');
    
  }
};
