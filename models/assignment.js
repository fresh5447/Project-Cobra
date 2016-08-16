const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  title: String,
  desc: String
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
