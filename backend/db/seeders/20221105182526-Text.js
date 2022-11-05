module.exports = {
  async up (queryInterface) {
    const textData = [
      {  text: 'lorem1' },
      {  text: 'lorem2' },
      {  text: 'lorem3' },
      {  text: 'lorem4' },
      { text: 'lorem5' },
      { text: 'lorem6' },
      { text: 'lorem7' },
      { text: 'lorem8' },
      { text: 'lorem9' },
      { text: 'lorem10' },
      
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
