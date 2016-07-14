const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: String,
  desc: String,
  link: String
});

module.exports = mongoose.model('Resource', ResourceSchema);
