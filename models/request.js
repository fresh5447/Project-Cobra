const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  type:       String,
  info:       Object
});

module.exports = mongoose.model('Request', RequestSchema);
