
const express = require('express');
const logger = require('./middlewares/logger');
const morgan = require('morgan');

const todosRouter = require('./routes/todos');
const usersRouter = require('./routes/users');

const app = express();


// ------------------------------------------
// basics
// ------------------------------------------

// app.get('/', (req, res) => {

//     // res.write('Hello World!');
//     // res.end();
//     // or
//     res.send('Hello World!'); // text/html

// });

// const todos = [
//     { id: 1, title: 'Learn Node.js', completed: false },
//     { id: 2, title: 'Learn Express.js', completed: false },
// ]

// app.get('/todos', (req, res) => {
//     res.send(todos); // application/json
// });

// const user = {
//     name: 'John Doe',
//     age: 30,
// }

// app.get('/user', (req, res) => {
//     //res.send(user); // application/json
//     res.json(user); // application/json
// });


// app.get('/about', (req, res) => {
//     res.redirect(301, '/profile');
// });

// app.get('/profile', (req, res) => {
//     res.send('Profile Page');
// });


// ------------------------------------------
// middleware
// ------------------------------------------

// app.get('/', (req, res, next) => {
//     // with response headers: Content-Type: text/html; charset=UTF-8
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/css/bootstrap.css', (req, res, next) => {
//     // with response headers: Content-Type: text/css; charset
//     res.sendFile(__dirname + '/public/css/bootstrap.css');
// });

// app.get('/images/todos.png', (req, res, next) => {
//     // with response headers: Content-Type: image/png
//     res.sendFile(__dirname + '/public/images/todos.png');
// });


// // Logging Middleware
// app.use((req, res, next) => {
//     console.log("Middleware 1");
//     console.log('Time:', Date.now());
//     next();
// });

// // Authentication Middleware
// app.use((req, res, next) => {
//     console.log("Middleware 2");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Middleware 3");
//     res.send('Hello World!');
//     next(); // this will not be executed
// });



// app.use(logger);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static('public'));

app.param('id', (req, res, next, id) => {
    req.id = parseInt(id);
    next();
});

app.use('/todos', todosRouter);
app.use('/users', usersRouter);

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Something broke! ${err.message}`);
});


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});