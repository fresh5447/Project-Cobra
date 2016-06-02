'use strict';

const express    = require('express');
const Submission = require('../models/submission');
const Router = express.Router();


Router.route('/')
  .post(function(req, res){
    console.log(req.user)
    const submission = new Submission({
      content:    req.body.content,
      checkpoint: req.body.checkpoint,
      user: req.user._id ? req.user._id : '574f5fa826a0167cd19e90b7'
    });
    submission.save(function(err, sub){
      if(err){
        console.log('error saving submission', err)
      } else {
        res.json(submission)
      }
    })
  })
  .get(function(req, res){
    Submission.find(function(err, subs){
      if(err){
        console.log(err, 'err')
      } else {
        res.json(subs)
      }
    })
  })

module.exports = Router;