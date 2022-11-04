const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const testPassword = process.env.TEST_USER_PASSWORD ?? '1q2w3e4r';
    const hash = await bcrypt.hash(testPassword, 10);

    const testUser = {
      email: process.env.TEST_USER_EMAIL ?? 'denis@denis.ru',
      password: hash,
      displayName: 'Денис',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert('Users', [testUser]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
