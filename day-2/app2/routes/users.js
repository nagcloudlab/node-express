

const express = require('express');
const router = express.Router();

router
    .get('/:id', (req, res, next) => {
        next(new Error('this route is not implemented yet'));
    })


module.exports = router;