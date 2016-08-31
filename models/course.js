const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  startDate: String,
  completionDate: String,
  title: String,
  intensity: String,
  desc: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }]
});

module.exports = mongoose.model('Course', CourseSchema);
