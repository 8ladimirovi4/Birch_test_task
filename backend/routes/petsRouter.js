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
// petsRouter.post('/', async (req, res) => {
//   try {
//     const newPet = await Pet.create(
//       {
//         label: req.body.petName,
//         typeId: Number(req.body.petTypeId),
//       },
//     );
//     const petType = await PetType.findByPk(newPet.typeId);

//     res.json({
//       error: null,
//       data: {
//         ...newPet.get(),
//         PetType: petType,
//       },
//     });
//   } catch (error) {
//     res.json({
//       error: error.message,
//       data: null,
//     });
//   }
// });

petsRouter.post('/', async (req, res) => {
  const  value = req.body.label;
  console.log('===>', value);
  try {
    const newTask = await Task.create({
       id: '10',
       label: value,
       typeid: '1'
    });
    res.json(newTask);
  } catch ({ message }) {
    res.json({ message: "item not created" });
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

//DELETE

petsRouter.delete("/:id", async (req, res) => {
  try {
    await Pet.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json({success: true})
  } catch ({message}) {
    ({message: 'task didn\'t deleted'})
  }
})
module.exports = petsRouter;
