'use strict';

const express    = require('express');
const Submission = require('../models/submission');
const User = require('../models/user');
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
    Submission.find()
    .populate('checkpoint')
    .populate('user')
    .exec(function(err, subs){
      if(err){
        console.log(err, 'err')
      } else {
        res.json(subs)
      }
    })
  })

Router.route('/student-submissions/:cp_id')
  .get(function(req, res){
    const uID = req.user ? req.user._id : '574f5fa826a0167cd19e90b7'
    const cp_id = req.params.cp_id
    Submission.find(({ $and: [{ user: uID }, { checkpoint: cp_id }] }), function(err, subs){
      if(err){
        console.log(err, 'err')
      } else {
        res.json(subs)
      }
    })
  })

  Router.route('/all-student-submissions')
    .get(function(req, res){
      const uID = req.user ? req.user._id : '574f5fa826a0167cd19e90b7'
      Submission.find({ user: uID }).populate('checkpoint').exec(function(err, subs){
        if(err){
          console.log(err, 'err')
        } else {
          res.json(subs)
        }
      })
    })

Router.route('/edit-submission/:sub_id')
  .put(function(req, res){
    Submission.findById(req.params.sub_id, function(err, submission){
      if(err) {
        res.json({ message: "there was an error finding this bad boy" })
      } else {
        submission.content = req.body.content ? req.body.content : submission.content;
        submission.approved  = req.body.approved ? req.body.approved : submission.approved;

        submission.save(function(err){
          if(err) {
            res.json({ message: "there was an error saving the updated submission" });
          } else {
            res.json(submission)
          }
        });

      }
    });
  });


module.exports = Router;
