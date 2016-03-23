var events = require('events');

var eventEmitter = new events.EventEmitter();
var connectionHandler = function connected() {
	// body...
	console.log('connection Sucessful');
	eventEmitter.emit('Data_Received');
}

eventEmitter.on('connection', connectionHandler);

eventEmitter.on('Data_Received', function(){
	console.log('Data Received Successfully');

});

eventEmitter.emit('connection');
console.log("End of the Program");
