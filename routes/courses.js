const express = require('express');
const Course = require('../models/course');

const Router = new express.Router();

Router.route('/')
  .get((req, res) => {
    Course.find()
    .populate('students')
    .populate('modules')
    .exec((err, r) => {
      if (err) {
        res.json(err, 'ERROR');
      } else {
        res.json(r);
      }
    });
  })
  .post((req, res) => {
    const course = new Course({
      startDate: req.body.startDate,
      completionDate: req.body.completionDate,
      title: req.body.title,
      desc: req.body.desc,
      kind: req.body.kind,
      location: req.body.location,
      live: req.body.live
    });
    course.save((err, r) => {
      if (err) {
        res.json({ message: 'there was an error saving your r' });
      } else {
        res.json(r);
      }
    });
  });

Router.route('/:id')
  .get((req, res) => {
    Course.findById(req.params.id)
    .populate('students')
    .populate('modules')
    .exec((err, course) => {
      if (err) {
        res.json({ message: 'there was an error finding this course' });
      } else {
        res.json(course);
      }
    });
  })
  .put((req, res) => {
    Course.findById(req.params.id, (err, course) => {
      if(err) {
        res.json({ message: 'could not find course' })
      } else {
        course.startDate = req.body.startDate ? req.body.startDate : course.startDate;
        course.completionDate = req.body.completionDate ? req.body.completionDate : course.completionDate;
        course.title = req.body.title ? req.body.title : course.title;
        course.desc = req.body.desc ? req.body.desc : course.desc;
        course.kind = req.body.kind ? req.body.kind : course.kind;
        course.location = req.body.location ? req.body.location : course.location;
        course.live = req.body.live ? req.body.live : course.live;
        course.students = req.body.students ? req.body.students : course.students;
        course.modules = req.body.modules ? req.body.modules : course.modules;

        course.save((er) => {
          if (er) {
            res.json(err)
          } else {
            res.json(course)
          }
        })
      }
    })
  })
  .delete(function(req, res){
    Course.remove({ _id: req.params.id }, function(err) {
      if(err){
        res.json({ message: "Was unable to delete course" })
      } else {
        res.json("Course deleted!")
      }
    })
  });

module.exports = Router;
