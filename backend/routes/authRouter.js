const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

/*
  Проектирование маршрутов по REST

  Вариант 1 - самый простой в реализации, НО нельзя вынести в отдельный роутер
    POST /login    - обработка сабмита формы входа, создание сессии
    GET  /logout   - выход, удаление сессии
    POST /register - обработка сабмита формы регистрации, создание пользователя

  Вариант 2 - authRouter - просто, объединено в отдельный роутер
    POST /auth/login    - обработка сабмита формы входа, создание сессии
    GET  /auth/logout   - выход, удаление сессии (метод не соответствует смыслу действия)
    POST /auth/register - обработка сабмита формы регистрации, создание пользователя

  >> Вариант 3 - по REST, если есть силы и время <<
    POST   /auth/    - обработка сабмита формы входа, создание сессии
    DELETE /auth/   - выход, удаление сессии
    POST   /auth/register - обработка сабмита формы регистрации, создание пользователя
*/

// POST /auth - обработка сабмита формы входа, создание сессии
authRouter.post('/', async (req, res) => {
  // Шаг 0. Проверить, что req.body.email и req.body.password не пустые.
  // Часть валидации на бэкенде
  // TODO

  // Шаг 1. Найти пользователя
  let user;
  try {
    user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      res.json({ error: 'Нет пользователя с таким email и/или паролем.' });
      return; // Завершить работу callback-функции
    }

    // Перейти к шагу 2
  } catch ({ message }) {
    res.json({ error: message });
    return; // Завершить работу callback-функции
  }

  // Шаг 2. Сверить пароль
  try {
    const isSame = await bcrypt.compare(req.body.password, user.password);

    if (!isSame) {
      res.json({ error: 'Нет пользователя с таким email и/или паролем.' });
      return; // Завершить работу callback-функции
    }

    // TODO: Перейти к шагу 3
  } catch ({ message }) {
    res.json({ error: message });
    // return;  // TODO: Завершить работу callback-функции
  }

  // Шаг 3. Создать пользовательскую сессию — авторизация (authorization)
  // Создать (инициализировать) сессию.
  req.session.user = {
    id: user.id,
    email: user.email,
    displayName: user.displayName,
  };

  res.json({
    error: null,
    data: req.session.user,
  });
});

// DELETE /auth
authRouter.delete('/', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      // TODO продумать и сделать нормально
      res.json({ error: 'Не удалось выйти' });
      return;
    }

    // Если сессия удалилась...
    res.clearCookie('user_sid'); // очистить куку
    res.json({
      error: null,
      data: 'Вышли успешно',
    });
  });
});

module.exports = authRouter;
