var mongoose = require('mongoose');
var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

    app.post('/signup', function(req, res, next) { 
      passport.authenticate('local-signup', function(err, user, info) {
        console.log('sign up post', info);
        if (err) { return next(err); }
        if (!user) { return res.status(404).json(info.message);}
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json({message: "you did it mofro", user: user});
        });
      })(req, res, next);
    });

 
    app.post('/login', function(req, res, next) {
      passport.authenticate('local-login', function(err, user, info) {
        console.log('login post', info);
        if (err) { return next(err); }
        if (!user) { return res.status(404).json(info.message);}
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json({message: "you did it mofo", user: user});
        });
      })(req, res, next);
    });
    

    app.get('/logout', function(req, res) {
       req.logout();
       res.redirect('/');
    });

    app.get('/getUser', function(req, res){
      if(req.user){
        User.findById(req.user._id, function(err, user){
          if(err){
            console.log(err)
          } else {
            res.json(user)
          }
        })
      } else {
        res.json({user: "no user"})
      }
    })
    

};