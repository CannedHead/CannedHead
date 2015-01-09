var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({ 
	user_id: { type: String },
	description: { type: String },
	project_id: { type: String },
	open: { type: Date, default: Date.now },
	closed: { type: Date, default: Date.now },
    lastUpdate: { type: Date, default: Date.now }
});
 

var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;