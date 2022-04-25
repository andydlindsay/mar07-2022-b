const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = 8001;

let todos = [
  {
    id: 'abcd',
    task: 'do compass work',
    completed: false
  },
  {
    id: 'efgh',
    task: 'resume build',
    completed: true
  },
];

app.use(morgan('dev'));
app.use(express.json());
// app.use(cors());
app.use(express.static('../client/build'));

const genRandomId = () => {
  return Math.random().toString(36).substring(2, 6);
};

// GET /todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// PATCH /todos/:id
app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const newTask = req.body.task;

  // const foundTodo = todos.find(todo => todo.id === id);
  // foundTodo.task = newTask;

  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        task: newTask
      };
    }

    return todo;
  });

  res.status(200).json({ success: true });
});

// POST /todos
app.post('/todos', (req, res) => {
  const task = req.body.task;

  const id = genRandomId();

  const obj = {
    id,
    task,
    completed: false
  };

  todos.push(obj);

  res.status(201).json(obj);
});

// DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;

  todos = todos.filter((todo) => {
    return todo.id !== id;
  });

  res.status(200).json({ success: true });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
