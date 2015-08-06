module.exports = function(mongoose) {
	mongoose.connect('mongodb://localhost/Ke', function(err) {
	    if(err) {
	        console.log('----------------');
	        console.log('connection error');
	        console.log('----------------');
	    } else {
	        console.log('----------------------');
	        console.log('connection successful!');
	        console.log('----------------------');

	    }
	});
}