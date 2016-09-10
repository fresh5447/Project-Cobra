const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: String,
  content: String,
  link: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  video: String,
  userFavorites: Number,
  live: Boolean,
  fav: Boolean,
  kind: String
});

module.exports = mongoose.model('Resource', ResourceSchema);
