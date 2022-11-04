const typesRouter = require('express').Router();
const { PetType } = require('../db/models');

// GET /types
typesRouter.get('/', async (req, res) => {
  try {
    const types = await PetType.findAll();
    res.json({
      error: null,
      data: types,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

module.exports = typesRouter;
