var mongoose = require('mongoose');

// var user_collection = new mongoose.Schema({
//   name: String,
//   male: Boolean,
//   updated_at: { type: Date, default: Date.now },
// }, {collection: 'user'});

var studynote_collection = new mongoose.Schema({}, {collection: 'studynote'});

var Blog = mongoose.model('Blog', studynote_collection);

// module.exports = mongoose.model('user', user_collection);
// module.exports = mongoose.model('studynote', studynote_collection);
module.exports = function() {

	this.firstDBfunction = function(res) {
		sdfsadfsdsadgsdgsdgsdgsdgs
	}

}