'use strict';

const express = require('express');
const Module = require('../models/module');

const Router = express.Router();

Router.route('/')
  .get(function(req, res){
    Module.find()
    .populate('checkpoints')
    .exec(function(err, modules){
      if(err){
        res.json({ message: "there was an error finding all modules" })
      } else {
        res.json(modules.sort(function (a, b) {
          if (a.order > b.order) {
            return 1;
          }
          if (a.order < b.order) {
            return -1;
          }
          // a must be equal to b
          return 0;
          })
        )
      }
    })
  })
  .post(function(req, res){
    let module = new Module({
      title: req.body.title,
      desc:  req.body.desc,
      hours: req.body.hours
    });
    module.save(function(err, module){
      if(err){
        res.json({ message: 'there was an error saving your module' });
      } else {
        console.log('POSTING: ', module)
        res.json(module);
      }
    })
  });

Router.route('/byName/:name')
  .get(function(req, res){
    Module.find({ title: req.params.name })
    .populate('checkpoints')
    .exec(function(err, module) {
      if(err){
        res.json({ message: "no module found with id #{req.params.id" })
      } else {
        res.json(module)
      }
    })
  });

Router.route('/byId/:id')
  .get(function(req, res){
    Module.findById(req.params.id)
    .populate('checkpoints')
    .exec(function(err, module) {
      if(err){
        res.json({ message: "no module found with id #{req.params.id" })
      } else {
        res.json(module)
      }
    })
  })
  .put(function(req, res){
    Module.findById(req.params.id, function(err, module){
      if(err) {
        res.json({ message: "there was an error finding this bad boy" })
      } else {
        module.title = req.body.title ? req.body.title : module.title;
        module.desc  = req.body.desc ? req.body.desc : module.desc;
        module.hours = req.body.hours ? req.body.hours : module.hours

        module.save(function(err){
          if(err) {
            res.json({ message: "there was an error saving the updated Module" });
          } else {
            res.json(module)
          }
        });

      }
    });
  })
  .delete(function(req, res){
    Module.remove({ _id: req.params.id }, function(err) {
      if(err){
        res.json({ message: "Was unable to delete Module" })
      } else {
        res.json("Module deleted!")
      }
    })
  });



module.exports = Router;
