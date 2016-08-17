const mongoose = require('mongoose');

autoIncrement = require('mongoose-auto-increment'),
Schema = mongoose.Schema;

var connection = mongoose.createConnection(process.env.MONGODB_URI || "mongodb://localhost/lms");
autoIncrement.initialize(connection);

const ModuleSchema = new Schema({
  title: String,
  desc: String,
  hours: Number,
  checkpoints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Checkpoint' }],
  order: Number,
  complete: { type: Boolean, default: false },
  live: Boolean,
});

ModuleSchema.plugin(autoIncrement.plugin, { model: 'Module', field: 'order' });


module.exports = mongoose.model('Module', ModuleSchema);
