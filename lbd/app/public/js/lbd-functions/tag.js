var LBD.Tag = function(filepath){
	this.imgPath = filepath;
	this.type = "Default";
	this.transcription = "";
	this.categories = [];
}

LBD.Tag.prototype.addToCollection = function(collection)
{
	
}
LBD.Tag.prototype.giveScore = function(category, number)
{
	
}
// LBD.Tag.prototype.getScore = function()
// {
// 	
// }
LBD.Tag.prototype.makeDraggable = function()
{
	
}
LBD.Tag.prototype.expandView = function()
{
	
}
LBD.Tag.prototype.reduceView = function()
{
	
}
LBD.Tag.prototype.whoOwns = function()
{
	//triggers db call returning all users that have tag t in a collection
}
LBD.Tag.prototype.tagFocus_single = function(){
	// handles singleclick JQuery event. Pulls out drawer
}

LBD.Tag.prototype.tagFocus_hover = function(){
	// handles hover JQuery event. Pulls out drawer
}

LBD.Tag.prototype.tagFocus_double = function(){
	// handles double-click JQuery event. Inits lightbox, comment interface.
}


// End Tag Functions