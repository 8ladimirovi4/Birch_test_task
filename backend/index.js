// Прогрузить переменные окружения из файла .env
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

const passUserFromSession = require('./middleware/passUserFromSession');
const indexRouter = require('./routes/indexRouter');
const petsRouter = require('./routes/petsRouter');
const typesRouter = require('./routes/typesRouter');
const authRouter = require('./routes/authRouter');
const { sequelize } = require('./db/models');
const tasksRouter = require('./routes/tasksRouter');

// Веб-сервер
const app = express();

// Порт для прослушки веб-сервером
const PORT = process.env.PORT ?? 3000;

// Конфигурация работы с сессиями
const sessionConfig = {
  store: new FileStore(), // подключить файловое хранилище для сессий
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым

  resave: false, // Пересохранять ли куку при каждом запросе

  // Если true - можно делать аутентификацию без авторизации
  // Если false - только авторизация + аутентификация
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session

  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах (12 часов)
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

// Подключение промежуточных функций
// morgan('dev') возвращает callback-функцию (middleware)
app.use(morgan('dev'));
// Подключить middleware для работы с сессиями + чтения куки
app.use(session(sessionConfig));
// Передать пользователя из сессии в res.locals
app.use(passUserFromSession);
// Рассказать серверу, как работать с телом запроса в формате application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Рассказать серверу, как работать с телом запроса в формате application/json
app.use(express.json());
app.use(cors({ origin: ['http://localhost:3000'] }));

// Подключение промежуточных функций-роутеров
app.use('/', indexRouter);
app.use('/pets', petsRouter);
app.use('/types', typesRouter);
app.use('/auth', authRouter);
app.use('/tasks', tasksRouter);
// Слушать порт
app.listen(PORT, async () => {
  /* eslint-disable no-console */
  console.log('Сервер запущен на порту', PORT);

  try {
    await sequelize.authenticate();
    console.log('Успешно подключились к БД');
  } catch (error) {
    console.log('Ошибка подключения к БД');
    console.log(error.message);
  }

  /* eslint-enable no-console */
});
