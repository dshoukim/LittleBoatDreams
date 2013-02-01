var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema(
{	name	: 	{	
				type:String,
				require:true,
				trim:true
	},
	email	: 	{
				type:Mixed,
				require:true
	},
	user	: 	{
				type:Mixed,
				require:true
	},
	pass	: 	{
				type:Mixed,
				required:true
	},
	country	: 	{
				type:String,
				required:true
	}
});
var account = mongoose.model('Account', Account)
module.exports = account;