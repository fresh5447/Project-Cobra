const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  startDate: Date,
  completionDate: Date,
  title: String,
  kind: String,
  desc: String,
  location: String,
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }]
});

module.exports = mongoose.model('Course', CourseSchema);
