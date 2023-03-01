const express = require('express');
const cors = require('cors');
const db = require('./utils/database');
const Todo = require('./models/todos.model');
const todoRoutes = require('./routes/todo.routes');

const app = express();

const PORT = 8000;

Todo;

db.authenticate()
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Database synchronized'))
  .catch(err => console.log(err));

app.use(cors());

app.use(express.json());

app.use('/api/v1/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
