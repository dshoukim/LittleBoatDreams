var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tag = new Schema({	
	tid		: 	{	type:String	},
	desc	: 	{	type:String	},
	cats	: 	{	type:Array	},
});
module.exports = mongoose.model('Tag', Tag);

