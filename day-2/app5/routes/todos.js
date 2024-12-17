var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');


// Get the client
const mysql = require('mysql2/promise');

// Create the connection to database
let connection = null;
(async () => {
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root1234',
      database: 'todosdb',
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();


router
  .get('/', async function (req, res, next) {
    try {
      const [results, fields] = await connection.query(
        'SELECT * FROM todos'
      );
      res.json(results);
    } catch (e) {
      console.error(e);
      res.status(500).send('Something went wrong');
    }
  })
  .get('/:id', function (req, res, next) {
  })
  .post('/', bodyParser.json(), async function (req, res, next) {
    const { title, completed } = req.body;
    const [results] = await connection.query(
      'INSERT INTO todos (title, completed) VALUES (?, ?)',
      [title, completed]
    );
    res.json({ id: results.insertId });
  })
  .put('/:id', bodyParser.json(), function (req, res, next) {
  })
  .delete('/:id', function (req, res, next) {
  });

module.exports = router;
