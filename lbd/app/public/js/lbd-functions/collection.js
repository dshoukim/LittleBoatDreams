LBD.Collection = function()
{
	this.title = function(){
		// Untitled Collection concat w/
		// # of other Untitled Collections...
		return "";
	};
	this.tags = {};
	this.tagscores = {};
	this.comment = "";
}

LBD.Collection.prototype.newName = function(newName)
{
	this.title = toString(newName);
}

LBD.Collection.prototype.addTag = function(tagID)
{
	this.tags[toString(tagID)] = [];
}

LBD.Collection.prototype.removeTag = function()
{

}

LBD.Collection.prototype.setComment=function(tagID)
{
	
}

LBD.Collection.prototype.getImageID=function(img){
	var tagID
	// AJAX CALL w/img variable
	return tagID
}

LBD.Collection.prototype.addCategory=function(tagID, cat)
{
	this.tags[toString(tagID)].push(cat);
}

LBD.Collection.prototype.compSynonyms = function(inputCat)
{
	// function will compare user-input categories
	// against known ones and place it in appropriate
	// dictionary entry.
}

LBD.Collection.prototype.addCategory=function(tagID, cat)
{
	this.tags[toString(tagID)].pop(cat);
}

LBD.Collection.prototype.tagFocus_single = function()
{
	// handles singleclick JQuery event. Pulls out drawer
}

LBD.Collection.prototype.tagFocus_hover = function()
{
	// handles hover JQuery event. Pulls out drawer
}

LBD.Collection.prototype.tagFocus_double = function()
{
	// handles double-click JQuery event. Inits lightbox, comment interface.
}

//LBD.Collection.prototype.traverseTags = function(){}

LBD.Collection.prototype.rawTagScores = function()
{
	// for key in tags...
	// for length of key's value
	// compare word to tagscores
	// if already in, tagscores[word] += 1
	// if not tagscores[word] = 1	
}

LBD.Collection.prototype.normalizeTagset= function()
{
	//pseudo code:
	for (var i in tagscores){
		score_nrml = ( score_act / score_tot ) * constant
		scores_normalized["category"] = score_nrml
	}
}

LBD.Collection.prototype.navToUser = function()
{
	
}

LBD.Collection.prototype.saveChanges_LS = function()
{
	// Saves changes made to collections in real time to local storage
}

LBD.Collection.prototype.saveChanges_DB = function()
{
	// Dumps changes stored in localstorage into Database.
}