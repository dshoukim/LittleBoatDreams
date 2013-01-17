'use strict';
// Begin LBD Functions
// Date Created: 16 January, 2013.
// Dan Shoukimas

var LBD = LBD || { REVISION: "2"};
var IMG_FULLSIZE = //1654 x 250 px.
function scaleToFit()
var LBD.Tag = function(filepath)
{
	this.imgPath = filepath;
	this.material;
	this.type = "Default";
	this.transcription = "";
	this.categories = [];
} 

LBD.Tag.prototype.createSprite = function()
{
	var raw_size = IMG_FILLSIZE;
	var size = scaletoFit(raw_size)
}

LBD.Tag.prototype.addToCollection = function(collection)
{
	
}
LBD.Tag.prototype.giveScore = function(category, number)
{
	
}
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
LBD.Tag.prototype.tagFocus_single = function()
{
	// handles singleclick JQuery event. Pulls out drawer
}
LBD.Tag.prototype.tagFocus_hover = function()
{
	// handles hover JQuery event. Pulls out drawer
}
LBD.Tag.prototype.tagFocus_double = function()
{
	// handles double-click JQuery event. Inits lightbox, comment interface.
}

// End Tag Functions

// Begin Collection Functions

var LBD.Collection = function()
{
	this.cID;
	this.title = "";
	this.length = 0;
	this.tags = {};
	this.tagscores = {};
	this.comments = {};

}
LBD.Collection.prototype.getCollection = function()
{
	
}

LBD.Collection.prototype.NumTags = function()
{
// returns number of tags in a collection
	var localsize = 0, key;
	for (key in this)
	{
		if ( this.hasOwnProperty( key ) ){ size++ };
	}
	return localsize;
}
LBD.Collection.prototype.closestSqrt = function(numTags)
{
	// returns the number of tags per full row/column of vieiwing grid.
	var base = 0;
	while(base**2 <= numTags){
		base++
	}
	return base;
}
LBD.Collection.prototype.initMaterialsList()
LBD.Collection.prototype.newName = function(newName)
{
	this.title = toString(newName.val());
}
LBD.Collection.prototype.addTag = function(tagID)
{
	//getTagID through jquery, should live in a data-tag in the element.
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

		
// NAV FUNCTIONS
		
function neighbor(){}

function animate(){}
function render(){}
var categories = [];
function allowDrop(ev)
{
	ev.preventDefault();
}
function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev)
{
	ev.preventDefault();
	//convertDragDrop(ev);
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}
function convertDragDrop(ev)
{
	// converts the Text category object into an object recognized by webGL renderer
}
function signup_ajax(){
}

var Manager = Manager || {}
var fandf, pets, love, sandr, material, politix, drawings, misc;
var categories = 
{
	"Family + Friends" : fandf,
 	"Pets" : pets,
 	"Love" : love,
 	"Spirituality + Religion" : sandr,
 	"Material" : material,
	"Politics" : politix,
	"Drawings": drawings
	"Misc.": misc
};
function findNearestNeighbor(){};

