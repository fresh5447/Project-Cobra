const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  project_title:       String,
  project_description: String,
  hours:               Number
});

module.exports = mongoose.model('Project', ProjectSchema);