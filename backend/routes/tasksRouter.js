const tasksRouter = require('express').Router();

const { Task } = require('../db/models');

tasksRouter.get('/', async (req, res) => {
  try {
    const task = await Task.findAll();
    res.json({
      error: null,
      data: task,
    });
  } catch (error) {
    res.json({
      error: error.message,
      data: null,
    });
  }
});

tasksRouter.post('/', async (req, res) => {
  const value1 = req.body.label;
  const value2 = req.body.check;
  if (value1 !== '' && value2 !== '') {
    try {
      const newTask = await Task.create({
        label: value1,
      });
      res.json(newTask);
    } catch ({ message }) {
      res.json({ message: 'item not created' });
    }
  }
});

tasksRouter.delete('/:id', async (req, res) => {
  try {
    await Task.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json({ success: true });
  } catch ({ message }) {
    ({ message: "task didn't deleted" });
  }
});

tasksRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { label } = req.body;
  if (req.body.label !== '') {
    try {
      const data = await Task.update(
        { label },
        {
          where: { id },
          returning: true,
        }
      );
      const [_, arr] = data;
      res.json(arr.map((el) => el.label).join(''));
    } catch (error) {
      res.json(error.message);
    }
  }
});
module.exports = tasksRouter;
