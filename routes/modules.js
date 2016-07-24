'use strict';

const express = require('express');
const Module = require('../models/module');
const User = require('../models/user');

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1], 10) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement == currentElement ||
         (searchElement != searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

const Router = express.Router();


// This majestic route is able to tell if a module is complete, as well as if checkpoints are complete.
// The trick is that it does not persist it in the database. Naugthy? You tell me..
Router.route('/student')
  .get((req, res) => {
    Module.find()
    .populate('categories')
    .populate('checkpoints')
    .exec((err, modules) => {
      if (err) {
        res.json({ message: 'there was an error finding all modules' });
      } else {
        User.findById(req.user._id)
        .populate('completedModules')
        .exec((er, user) => {
          if (er) {
            res.json(er);
          } else {
            for (var i = 0; i < modules.length; i++) {

              for (var j = 0; j < modules[i].checkpoints.length; j++) {
                if (modules[i].checkpoints[j].userCompletions.includes(req.user._id.toString())) {
                  modules[i].checkpoints[j].complete = true;
                } else {
                  modules[i].checkpoints[j].complete = false;
                }
              }

              const mappedCompletedMods = user.completedModules.map((item) => {
                return item._id
              });

              if (mappedCompletedMods.includes(modules[i]._id.toString())) {
                modules[i].complete = true;
              } else {
                modules[i].complete = false;
              }
            }
            res.json(modules);
          }
        });
      }
    });
  });

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
