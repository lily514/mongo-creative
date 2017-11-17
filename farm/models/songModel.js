var mongoose = require('mongoose');
var songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  song: [Number],
});
mongoose.model('Songs', songSchema);

