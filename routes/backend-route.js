module.exports = function(app, SM) {

	app.get('/api/load', function(req, res) {
	  res.send("hello world");
	})
}