const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
  content:    String,
  approved:   String,
  checkpoint: { type: mongoose.Schema.Types.ObjectId, ref: 'Checkpoint' },
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Submission', SubmissionSchema);