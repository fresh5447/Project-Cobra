const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
  title:       String,
  desc:        String,
  hours:       Number,
  checkpoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Checkpoint' }]
});

module.exports = mongoose.model('Module', ModuleSchema);