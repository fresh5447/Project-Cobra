const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CheckpointSchema = new Schema({
  title:      String,
  desc:       String,
  number:     Number,
  publish:    Boolean,
  content:    String,
  assignment: String,
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' }
});

module.exports = mongoose.model('Checkpoint', CheckpointSchema);