const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
  content:    String,
  checkpoint: { type: mongoose.Schema.Types.ObjectId, ref: 'Checkpoint' },
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  approved:   { type: Boolean, default: false }
});

module.exports = mongoose.model('Submission', SubmissionSchema);