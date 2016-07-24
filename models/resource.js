const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  title: String,
  desc: String, //TODO: Delete this
  content: String,
  link: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  internal: Boolean,
  userFavorites: Number,
  public: Boolean,
  fav: Boolean
});

module.exports = mongoose.model('Resource', ResourceSchema);
