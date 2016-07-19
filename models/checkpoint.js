const mongoose = require('mongoose'),
  autoIncrement = require('mongoose-auto-increment'),
  Schema = mongoose.Schema;

var connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/lms");
autoIncrement.initialize(connection);

const CheckpointSchema = new Schema({
  title: String,
  desc: String,
  number: Number,
  publish: Boolean,
  content: String,
  assignment: String,
  module: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  userCompletions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  order: Number
});

CheckpointSchema.plugin(autoIncrement.plugin, { model: 'Checkpoint', field: 'order' });

module.exports = mongoose.model('Checkpoint', CheckpointSchema);
