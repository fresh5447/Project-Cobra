const express = require('express');
const Category = require('../models/category');

const Router = new express.Router();

Router.route('/')
  .get((req, res) => {
    Category.find((err, cat) => {
      if(err){
        console.log(err)
      } else {
        res.json(cat)
      }
    })
  })
  .post((req, res) => {
    const category = new Category({
      name: req.body.name
    });
    category.save((err, cat) => {
      if (err) {
        res.json({ message: 'there was an error saving your cat' });
      } else {
        res.json(cat);
      }
    });
  });

module.exports = Router;
