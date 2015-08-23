module.exports = function(app, SM) {

	app.get('/api/load', function (req, res) {
	  console.log('....');
	  new SM.firstDBfunction();
	})
}