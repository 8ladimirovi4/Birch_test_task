const textRouter = require('express').Router();

const { Text, Task } = require('../db/models');

textRouter.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const task = await Text.findByPk(id, {
      include: Text.Task,
    });
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

textRouter.post('/', async (req, res) => {
  const  value = req.body.text;
  const id = req.body.taskid;
  try {
    const newText = await Text.create({
       text: value,
       taskid: id
    });
    res.json(newText);
  } catch ({ message }) {
    res.json({ message: "text did not created" });
  }
});


textRouter.delete("/:id", async (req, res) => {
  try {
    await Text.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    res.json({success: true})
  } catch ({message}) {
    ({message: 'text didn\'t deleted'})
  }
})

textRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const data = await Text.update(
      { text },
      {
        where: { id },
        returning: true,
      }
    );
    const [_, arr] = data;
    res.json(arr.map((el) => el.label).join(''));
    console.log(arr);
  } catch (error) {
    res.json(error.message);
  }
});
module.exports = textRouter;
