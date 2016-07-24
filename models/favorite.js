const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  resource: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
