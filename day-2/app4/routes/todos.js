var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

let todos = [
  { id: 1, title: 'Learn JavaScript', completed: true },
  { id: 2, title: 'Learn Node.js', completed: false },
  { id: 3, title: 'Learn React.js', completed: false }
];

router
  .get('/', function (req, res, next) {
    res.status(200).json(todos);
  })
  .get('/:id', function (req, res, next) {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
  })
  .post('/', bodyParser.json(), function (req, res, next) {
    const todo = req.body;
    todo.id = todos.length + 1;
    todos.push(todo);
    res.status(201).json(todo);
  })
  .put('/:id', bodyParser.json(), function (req, res, next) {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    const updatedTodo = req.body;
    updatedTodo.id = id;
    todos[id - 1] = updatedTodo;
    res.status(200).json(updatedTodo);
  })
  .delete('/:id', function (req, res, next) {
    const id = parseInt(req.params.id);
    // const todo = todos.find(todo => todo.id === id);
    // if (!todo) {
    //   return res.status(404).json({ message: 'Todo not found' });
    // }
    // todos.splice(id - 1, 1);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).json();
  });

module.exports = router;
