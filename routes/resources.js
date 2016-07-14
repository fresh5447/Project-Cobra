const express = require('express');
const Resource = require('../models/resource');

const Router = new express.Router();

Router.route('/')
  .get((req, res) => {
    Resource.find()
    .populate('categories')
    .exec((err, resources) => {
      if (err) {
        res.json({ message: 'there was an error finding all resources' });
      } else {
        res.json(resources);
      }
    });
  })
  .post((req, res) => {
    const resource = new Resource({
      title: req.body.title,
      desc: req.body.desc,
      link: req.body.link
    });
    resource.save((err, source) => {
      if (err) {
        res.json({ message: 'there was an error saving your resource' });
      } else {
        res.json(source);
      }
    });
  });

module.exports = Router;

// Router.route('/byId/:id')
//   .get((req, res){
//     Module.findById(req.params.id)
//     .populate('checkpoints')
//     .exec(function(err, module) {
//       if(err){
//         res.json({ message: "no module found with id #{req.params.id" })
//       } else {
//         res.json(module)
//       }
//     })
//   })
//   .put(function(req, res){
//     Module.findById(req.params.id, function(err, module){
//       if(err) {
//         res.json({ message: "there was an error finding this bad boy" })
//       } else {
//         module.title = req.body.title ? req.body.title : module.title;
//         module.desc  = req.body.desc ? req.body.desc : module.desc;
//         module.hours = req.body.hours ? req.body.hours : module.hours
//
//         module.save(function(err){
//           if(err) {
//             res.json({ message: "there was an error saving the updated Module" });
//           } else {
//             res.json(module)
//           }
//         });
//
//       }
//     });
//   })
//   .delete(function(req, res){
//     Module.remove({ _id: req.params.id }, function(err) {
//       if(err){
//         res.json({ message: "Was unable to delete Module" })
//       } else {
//         res.json("Module deleted!")
//       }
//     })
//   });
