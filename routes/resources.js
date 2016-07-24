const express = require('express');
const Resource = require('../models/resource');
const User = require('../models/user');
const Router = new express.Router();

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

const uID = '5793f6457209639dad097947';


Router.route('/student')
  .get((req, res) => {
    Resource.find()
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

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

var ary = ['three', 'seven', 'eleven'];

ary.remove('seven');

Router.route('/student/favorite/:id/:action')
  .put((req, res) => {
    User.findById(req.user._id, (err, user) => {
      if(err) {
        res.json({ message: "couldnt find user" })
      } else {
        if(req.params.action === 'post'){
          user.favorites.push(req.params.id);
          user.save((e, u) => {
            if(e) {
              console.log("CANT SAVE USER", e);
              res.json({mesage: "error adding fav"})
            } else {
              console.log("SUCCESS", u);
              res.json(u);
            }
          });
        } else {
          user.favorites.remove(req.params.id);
          user.save((e, u) => {
            if(e) {
              console.log("CANT SAVE USER", e);
              res.json({mesage: "error adding fav"})
            } else {
              console.log("SUCCESS", u);
              res.json(u);
            }
          });
        }
      }
    })
  })

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
    // console.log(req.body.categories)
    // const cats = req.body.categories.map((item) =>
    //   item
    // );
    // console.log(cats);
    const resource = new Resource({
      title: req.body.title,
      desc: req.body.desc,
      link: req.body.link,
      categories: req.body.categories
    });
    // for (var i = 0; i < art.length; i++) {
    //   console.log(art[i]);
    // }

    // console.log(req.body.categories.forEach((item) => console.log(item)));
    // resource.categories.push(req.body.categories);
    console.log(resource);
    resource.save((err, source) => {
      if (err) {
        res.json({ message: 'there was an error saving your resource' });
      } else {
        res.json(source);
      }
    });
  });

Router.route('/favorites')
  .get((req, res) => {
    User.findById(req.user._id)
    .populate('favorites')
    .exec((err, user) => {
      if (err) {
        res.json({ message: 'there was an error getting favs' })
      } else {
        res.json(user.favorites)
      }
    })
  })
  .post((req, res) => {
    User.findById(req.user._id)
    .populate('favorites')
    .exec((err, user) => {
      if (err) {
        res.json({ message: 'there was an error getting favs' })
      } else {
        user.favorites.push(req.body.resource_id);
        user.save((e, s) => {
          if(e) {
            res.json({ message: 'there was an err updating it' })
          } else {
            res.json(s);
          }
        })
      }
    })
  })

Router.route('/id/:id')
    .get((req, res) => {
      Resource.findById(req.params.id)
      .populate('categories')
      .exec((err, resources) => {
        if (err) {
          res.json({ message: 'there was an error finding all resources' });
        } else {
          res.json(resources);
        }
      });
    })
    .put((req, res) => {
      Resource.findById(req.params.id)
      .populate('categories')
      .exec((err, resource) => {
        if (err) {
          res.json({ message: 'there was an error finding all resource' });
        } else {

          resource.title      = req.body.title ? req.body.title : resource.title;
          resource.desc       = req.body.desc ? req.body.desc : resource.desc;
          resource.link    = req.body.link ? req.body.link : resource.link;
          resource.categories = req.body.categories ? req.body.categories : resource.categories;
          resource.save((e, r) => {
            if(e){
              res.json({ message: "error updating" })
            } else {
              res.json(r);
            }
          });
        }
      });
    })
    .delete(function(req, res){
      Resource.remove({ _id: req.params.id }, function(err) {
        if(err){
          res.json({ message: "Was unable to delete resource" })
        } else {
          res.json("Resource deleted!")
        }
      })
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
