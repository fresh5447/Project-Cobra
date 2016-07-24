const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: String,
  content: String,
  link: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  internal: Boolean,
  userFavorites: Number,
  publish: Boolean,
  fav: Boolean
});

module.exports = mongoose.model('Resource', ResourceSchema);
