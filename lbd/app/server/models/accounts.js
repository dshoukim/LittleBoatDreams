var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var Account = new Schema(
{	name	: 	{	
				type:String,
				require:true,
				trim:true
	},
	email	: 	{
				type:String,//mixed
				require:true
	},
	user	: 	{
				type:String,//mixed
				require:true
	},
	pass	: 	{
				type:String,//mixed
				required:true
	},
	country	: 	{
				type:String,
				required:true
	}
});
module.exports = mongoose.model('Account', Account);

