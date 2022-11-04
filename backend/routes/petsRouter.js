const petsRouter = require('express').Router();

const { Pet, PetType } = require('../db/models');

// GET /pets
petsRouter.get('/', async (req, res) => {
  try {
    const pets = await Pet.findAll({
      include: [{
        association: Pet.PetType,
      }],
    });
    res.json({
      error: null,
      data: pets,
    });
  } catch (error) {
    res.json({
      error: error.message,
      data: null,
    });
  }
});

// POST /pets
petsRouter.post('/', async (req, res) => {
  try {
    const newPet = await Pet.create(
      {
        name: req.body.petName,
        typeId: Number(req.body.petTypeId),
      },
    );

    const petType = await PetType.findByPk(newPet.typeId);

    res.json({
      error: null,
      data: {
        ...newPet.get(),
        PetType: petType,
      },
    });
  } catch (error) {
    res.json({
      error: error.message,
      data: null,
    });
  }
});

// GET /pets/:id
petsRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const pet = await Pet.findByPk(id, {
      include: Pet.PetType,
    });

    res.json({
      error: null,
      data: pet,
    });
  } catch (error) {
    res.json({
      error: `Питомца с id ${req.params.id} не существует`,
      data: null,
    });
  }
});

// GET /pets/:petId/owners/:ownerId
petsRouter.get('/:petId/owners/:ownerId', (req, res) => {
  res.json(req.params);
});

module.exports = petsRouter;
