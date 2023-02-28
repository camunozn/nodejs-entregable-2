const { Router } = require('express');
const Todo = require('../models/todos.model');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll({
      attributes: ['id', 'title', 'description', 'status'],
    });
    res.json(todos);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await Todo.create(newTodo);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await Todo.update(data, {
      where: { id },
    });
    res.status(204).send();
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
