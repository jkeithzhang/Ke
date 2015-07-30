module.exports = function(app) {

	app.get('/api/load', function(req, res) {
	  res.send("hello world");
	})
}