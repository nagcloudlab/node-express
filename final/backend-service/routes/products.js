var express = require('express');
const { MongoClient } = require("mongodb");

var router = express.Router();

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

router
  .get('/', async function (req, res, next) {
    try {
      const database = client.db('shop-db');
      const products = database.collection('products');
      const cursor = await products.find(); // Non-blocking operation
      let productsList = [];
      await cursor.forEach(product => {
        productsList.push(product);
      });
      res.send(productsList);

    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  })
  .get('/:id/reviews', async function (req, res, next) {
    try {
      const database = client.db('shop-db');
      const reviews = database.collection('reviews');
      const cursor = await reviews.find({ product_id: parseInt(req.params.id) });
      let reviewsList = [];
      await cursor.forEach(review => {
        reviewsList.push(review);
      });
      res.send(reviewsList);
    } finally {
      // await client.close();
    }
  })
  .post('/:id/reviews', async function (req, res, next) {
    try {
      const database = client.db('shop-db');
      const reviews = database.collection('reviews');
      const review = {
        name: "Anonymous",
        product_id: parseInt(req.params.id),
        rating: req.body.rating,
        review: req.body.review,
        date: Date.now()
      }
      const result = await reviews.insertOne(review);
      res.send(result);
    } finally {
      // await client.close();
    }
  });

module.exports = router;
