var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var studynote_collection = require('../models/Studynote-model.js');


//study notes main page
router.get('/', function(req, res, next) {
  res.render('studynote-index', { title: 'Ke' });
});

//partials
router.get('/partials/:name', function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name, { title: 'Ke' });
});

router.get('/test', function(req, res, next) {
  studynote_collection.find({ 'name': "Yue Li" }, function (err, result) {
    if (err) return next(err);
    res.json(result);
  });
});

// router.post('/', function(req, res, next) {
//   Ke.create(req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.get('/:id', function(req, res, next) {
//   Ke.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.put('/:id', function(req, res, next) {
//   Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// router.delete('/:id', function(req, res, next) {
//   Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
