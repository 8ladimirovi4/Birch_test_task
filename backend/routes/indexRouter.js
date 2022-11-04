const indexRouter = require('express').Router();

// GET /
indexRouter.get('/', (req, res) => {
  const { name } = req.query;
  // eslint-disable-next-line no-nested-ternary
  const message = name
    ? `Привет, ${name}`
    : req.session?.user?.displayName
      ? `Привет, ${req.session.user.displayName}`
      : 'Привет, Мир';

  res.json({
    error: null,
    data: message,
  });
});

module.exports = indexRouter;
