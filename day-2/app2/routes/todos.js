

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


const todos = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: `Todo ${i + 1}`,
    completed: false,
}));

router
    .get('/', (req, res) => {
        const limit = parseInt(req.query.limit) || 10;
        res.json(todos.slice(0, limit));
    })
    .get('/:id', (req, res) => {
        const todo = todos.find(todo => todo.id === req.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    })
    .post('/', bodyParser.json(), (req, res) => {
        const todo = req.body;
        console.log(todo);
        todo.id = todos.length + 1;
        todos.push(todo);
        res.status(201).json(todo);
    })
    .delete('/:id', (req, res) => {
        const index = todos.findIndex(todo => todo.id === req.id);
        if (index === -1) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        todos.splice(index, 1);
        res.status(204).end();
    });




module.exports = router;