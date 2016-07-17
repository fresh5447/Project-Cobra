var mongoose = require('mongoose');
var User = require('../models/user');
var async = require('async');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
require('dotenv').config();
// app/routes.js
module.exports = function(app, passport) {

  app.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      console.log('sign up post', info);
      if (err) { return next(err); }
      if (!user) { return res.status(404).json(info.message);}
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({message: "Success! You are all signed up.", user: user});
      });
    })(req, res, next);
  });


  app.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      console.log('login post', info);
      if (err) { res.json(info); }
      if (!user) { return res.status(404).json(info.message);}
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({message: "Success! You are logged in.", user: user});
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
  });

  app.get('/getUsers', function(req, res){
    User.find(function(err, users){
      if(err){
        console.log("error loading users")
      } else {
        res.json(users)
      }
    })
  });

  app.get('/reset/:token', function(req, res) {
    User.findOne({ 'local.resetPasswordToken': req.params.token, 'local.resetPasswordExpires': { $gt: Date.now() } }, function(err, user) {
      if (!user) {
        return res.json({message: 'Password reset token is invalid or has expired.'});
      }
      res.redirect('/reset');
    });
  });

  app.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ 'local.resetPasswordToken': req.params.token, 'local.resetPasswordExpires': { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          return  res.json({ message: 'Password reset token is invalid or has expired.' });
        }

        user.local.password = user.generateHash(req.body.password);
        user.local.resetPasswordToken = undefined;
        user.local.resetPasswordExpires = undefined;

        user.save(function(err) {
          req.logIn(user, function(err) {
            done(err, user);
          });
        });
      });
    },
    function(user, done) {
      var options = {
        auth: {
            api_key: process.env.SENDGRID_API
        }
      }
      var mailer = nodemailer.createTransport(sgTransport(options));
      var mailOptions = {
        to: user.email,
        from: 'passwordreset@demo.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.local.email + ' has just been changed.\n'
      };
      mailer.sendMail(mailOptions, function(err) {
        res.json({ message: 'Success! Your password has been changed.' });
        done(err);
      });
    }
  ], function(err) {
    console.log('did it fix it?');
  });
});


  app.post('/forgot', function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ 'local.email': req.body.email }, function(err, user) {
          if (!user) {
            res.json({message: 'No account with that email address exists.'});
            return res.redirect('/forgot');
          }

          user.local.resetPasswordToken = token;
          user.local.resetPasswordExpires = Date.now() + 3600000; // 1 hour

          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        var options = {
          auth: {
            api_key: process.env.SENDGRID_API
          }
        }
        var mailer = nodemailer.createTransport(sgTransport(options));

        var mailOptions = {
          to: user.local.email,
          from: 'doug@bigskycodeacademy.org',
          subject: 'Node.js Password Reset',
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/user/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        mailer.sendMail(mailOptions, function(err) {
          req.flash('info', 'An e-mail has been sent to ' + user.local.email + ' with further instructions.');
          done(err, 'done');
        });
      }
    ], function(err) {
      if (err) return next(err);
      res.redirect('/forgot');
    });
  });


};
