var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var songModel = mongoose.model('Songs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/songs', function(req, res, next) {
  console.log("in get songs");
   songModel.find(function(err, songList){
    if(err){ return next(err); }
    res.json(songList);
  });

});

router.post('/songs', function(req, res, next) {
  console.log("in post songs");
  var song = new songModel(req.body);
  song.save(function(err, song){
    if(err){ return next(err); }
    res.json(song);
  });

});

module.exports = router;
