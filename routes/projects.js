'use strict';

const express = require('express');
const Project = require('../models/project');

const Router = express.Router();

Router.route('/')
  .get(function(req, res){
    Project.find()
    .populate('checkpoints')
    .exec(function(err, projects){
      if(err){
        res.json({ message: "there was an error finding all projects" })
      } else {
        res.json(projects)
      }
    })
  })
  .post(function(req, res){
    let project = new Project({
      title: req.body.title,
      desc:  req.body.description,
      hours: req.body.hours
    });
    project.save(function(err, project){
      if(err){
        res.json({ message: 'there was an error saving your project' });
      } else {
        res.json(project);
      }
    })
  });

Router.route('/:id')
  .get(function(req, res){
    Project.findById(req.params.id)
    .populate('checkpoints')
    .exec(function(err, project) {
      if(err){
        res.json({ message: "no project found with id #{req.params.id" })
      } else {
        res.json(project)
      }
    })
  })
  .put(function(req, res){
    Project.findById(req.params.id, function(err, project){
      if(err) {
        res.json({ message: "there was an error finding this bad boy" })
      } else {
        project.title = req.body.title ? req.body.title : project.title;
        project.desc  = req.body.desc ? req.body.desc : project.desc;
        project.hours = req.body.hours ? req.body.hours : project.hours

        project.save(function(err){
          if(err) {
            res.json({ message: "there was an error saving the updated project" });
          } else {
            res.json(project)
          }
        });

      }
    });
  })
  .delete(function(req, res){
    Project.remove({ _id: req.params.id }, function(err) {
      if(err){
        res.json({ message: "Was unable to delete Project" })
      } else {
        res.json("Project deleted!")
      }
    })
  });

module.exports = Router;