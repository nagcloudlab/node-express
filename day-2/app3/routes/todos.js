

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const todos = [
    { id: 1, title: 'learn JavaScript', completed: true },
    { id: 2, title: 'learn React', completed: false },
    { id: 3, title: 'build a React app', completed: false }
];

router
    .get('/', function (req, res, next) {
        // load todos from any data source (e.g. database)
        res.render('todos', { todos: todos }); // render the todos view ( HTML page)
    })
    .get('/new', function (req, res, next) {
        res.render('todos-new');
    })
    .post('/new', bodyParser.urlencoded({ extended: false }), function (req, res, next) {
        const title = req.body.title;
        const completed = false;
        const id = todos.length + 1;
        todos.push({ id, title, completed });
        res.redirect('/todos');
    })
    .get('/delete/:id', function (req, res, next) {
        const id = parseInt(req.params.id);
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        res.redirect('/todos');
    })

module.exports = router;
