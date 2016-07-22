const express = require('express');
const Feedback = require('../models/feedback');

const Router = new express.Router();

Router.route('/')
  .get((req, res) => {
    Feedback.find()
    .populate('user')
    .exec((err, fb) => {
      if (err) {
        console.log(err)
      } else {
        res.json(fb)
      }
    })
  })
  .post((req, res) => {
    const feedback = new Feedback({
      content: req.body.content,
      page: req.body.page,
      user: req.user._id || '5786b46a3a132d320dd450c0'
    });
    feedback.save((err, fb) => {
      if (err) {
        res.json({ message: 'there was an error submitting your feedback' });
      } else {
        res.json(fb);
      }
    });
  });

module.exports = Router;
