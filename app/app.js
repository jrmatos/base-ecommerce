const app = require('./src/configs/express')();
const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('mongodb connection opened!');
	// server start	
	app.listen(app.get('port'), function () {
		console.log('server running at', app.get('port'));
	});
});

db.openUri('mongodb://localhost/ecommerce');