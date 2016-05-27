const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CheckpointSchema = new Schema({
  title: String,
  desc: String,
  number: Number,
  content: String,
  assignment: String,
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
});

module.exports = mongoose.model('Checkpoint', CheckpointSchema);