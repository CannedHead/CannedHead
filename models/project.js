var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({ 
	name: { type: String },
	description: { type: String },
    lastUpdate: { type: Date, default: Date.now }
});
 

var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;