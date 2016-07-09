const mongoose = require('mongoose'),
  autoIncrement = require('mongoose-auto-increment'),
  Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://localhost:27017/lms');
autoIncrement.initialize(connection);

const CheckpointSchema = new Schema({
  title: String,
  desc: String,
  number: Number,
  publish: Boolean,
  content: String,
  assignment: String,
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  order: Number
});

CheckpointSchema.plugin(autoIncrement.plugin, { model: 'Checkpoint', field: 'order' });

module.exports = mongoose.model('Checkpoint', CheckpointSchema);
