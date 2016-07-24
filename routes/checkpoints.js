'use strict';

const express    = require('express');
const Module    = require('../models/module');
const Checkpoint = require('../models/checkpoint');


// Array Includes PolyFil
// TODO: Extract to utilities file
// HACK: Had to use `==` to get it to compare ID's
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

Router.route('/student/:id/checkpoints')
.get((req, res) => {
  Module.find()
  .populate('categories')
  .exec((err, resources) => {
    if (err) {
      res.json({ message: 'there was an error finding all resources' });
    } else {
      User.findById(req.user._id)
      .populate('favorites')
      .exec((er, user) => {
        if (er) {
          res.json(er);
        } else {
          for (var i = 0; i < resources.length; i++) {
            const mappedFavs = user.favorites.map((item) => {
              return item._id
            });
            if (mappedFavs.includes(resources[i]._id.toString())) {
              resources[i].fav = true;
            } else {
              resources[i].fav = false;
            }
          }
          res.json(resources);
        }
      });
    }
  });
});


// Router.route('/approve/student/:checkpoint')



Router.route('/one/:id/checkpoints')
  .post(function(req, res){
    let cp = new Checkpoint({
      title:      req.body.title,
      desc:       req.body.desc,
      content:    req.body.content,
      publish:    req.body.publish,
      number:     req.body.number,
      assignment: req.body.assignment,
      module:    req.params.id
    });
    cp.save(function(err, checkpoint){
      if(err) {
        res.json({ message: "error trying to find project while creating checkpoint" })
      } else {
        Module.findById(req.params.id, function(err, module){
          if(err) {
            res.json({ message: "error trying to find module while creating checkpoint" })
          } else {
            module.checkpoints.push(checkpoint._id);
            module.save();
            res.json(module);
          }
        })
      }
    })
  })
  .get(function(req, res) {
    Module.findById(req.params.id)
    .populate('checkpoints')
    .exec(function(err, module){
      if(err) {
        res.json({ message: "error trying to find module while getting checkpoints" })
      } else {
        res.json( module.checkpoints )
      }
    })
  })

Router.route('/one/:id/checkpoints/:cp_id')
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
        checkpoint.module    = req.body.module ? req.body.module : checkpoint.module;

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

  Router.route('/two/cp/:cp_name')
  .get(function(req, res) {
    Checkpoint.find({ title: req.params.cp_name})
      .populate('module')
      .exec(function(err, checkpoint){
      if(err) {
        res.json({ message: "error trying to find checkpoint while getting checkpoints" })
      } else {
        res.json( checkpoint )
      }
    })
  });


// HACK: Couldnt chain these together for some reason
Router.route('/three/cp/:cp_id')
  .get(function(req, res) {
    Checkpoint.findById(req.params.cp_id)
      .populate('module')
      .exec(function(err, checkpoint){
      if(err) {
        res.json({ message: "error trying to find checkpoint while getting checkpoints" })
      } else {
        res.json( checkpoint )
      }
    });
    Router.route('/three/cp/:cp_id').put(function(req, res){
      Checkpoint.findById(req.params.cp_id, function(err, checkpoint){
        if(err) {
          res.json({ message: "there was an error finding this bad boy" })
        } else {
          checkpoint.title      = req.body.title ? req.body.title : checkpoint.title;
          checkpoint.desc       = req.body.desc ? req.body.desc : checkpoint.desc;
          checkpoint.content    = req.body.content ? req.body.content : checkpoint.content;
          checkpoint.assignment = req.body.assignment ? req.body.assignment : checkpoint.assignment;
          checkpoint.module    = req.body.module ? req.body.module : checkpoint.module;

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
  });

module.exports = Router;
