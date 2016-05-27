'use strict';

const express    = require('express');
const Project    = require('../models/project');
const Checkpoint = require('../models/checkpoint');

const Router = express.Router();

Router.route('/:id/checkpoints')
  .post(function(req, res){
    let cp = new Checkpoint({
      title:      req.body.title,
      desc:       req.body.desc,
      content:    req.body.content,
      number:     req.body.number,
      assignment: req.body.assignment,
      project:    req.params.id
    });
    cp.save(function(err, checkpoint){
      if(err) {
        res.json({ message: "error trying to find project while creating checkpoint" })
      } else {
        Project.findById(req.params.id, function(err, project){
          if(err) {
            res.json({ message: "error trying to find project while creating checkpoint" })
          } else {
            project.checkpoints.push(checkpoint._id);
            project.save();
            res.json(project);
          }
        })
      }
    })
  })
  .get(function(req, res) {
    Project.findById(req.params.id, function(err, project){
      if(err) {
        res.json({ message: "error trying to find project while getting checkpoints" })
      } else {
        res.json( project.checkpoints )
      }
    })
  })

Router.route('/:id/checkpoints/:cp_id')
  .get(function(req, res) {
    Checkpoint.findById(req.params.cp_id, function(err, checkpoint){
      if(err) {
        res.json({ message: "error trying to find checkpoint while getting checkpoints" })
      } else {
        res.json( checkpoint )
      }
    })
  })
  .put(function(req, res){
    Checkpoint.findById(req.params.cp_id, function(err, checkpoint){
      if(err) {
        res.json({ message: "there was an error finding this bad boy" })
      } else {
        checkpoint.title      = req.body.title ? req.body.title : checkpoint.title;
        checkpoint.desc       = req.body.desc ? req.body.desc : checkpoint.desc;
        checkpoint.content    = req.body.content ? req.body.content : checkpoint.content;
        checkpoint.assignment = req.body.assignment ? req.body.assignment : checkpoint.assignment;
        checkpoint.project    = req.body.project ? req.body.project : checkpoint.project;

        checkpoint.save(function(err){
          if(err) {
            res.json({ message: "there was an error saving the updated checkpoint" });
          } else {
            res.json(checkpoint)
          }
        });
      }
    });
  })
  .delete(function(req, res){
    Checkpoint.remove({ _id: req.params.cp_id }, function(err) {
      if(err){
        res.json({ message: "Was unable to delete checkpoint" })
      } else {
        res.json("checkpoint deleted!")
      }
    })
  });


module.exports = Router;