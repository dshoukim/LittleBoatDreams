'use strict';
// Begin LBD Functions
var LBD = LBD || { REVISION: "1"};

// End User Functions
// Begin TAG functions

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




// Begin Collection Functions



LBD.Collection = function()
{
	this.title = function(){
		// Untitled Collection concat w/
		// # of other Untitled Collections...
		return "";
	};
	this.tags = {}; // tags = { tagID-1 : [ "cat-1", "cat-2", "cat4"], tagID-2 : ["cat2"]... }
	this.tagscores = {}; // tagscores = { "cat-1" : 1, "cat-2" : 2, "cat-3" : 0, etc...}
	
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
//		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		/**------------------------------**/
		/**    END COLLECTION FUNCTIONS  **/
		/**------------------------------**/
//		^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		
		
		
		
		
		
//		vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
		/**	-----------------------------**/
		/**  BEGIN NAVIGATION FUNCTIONS  **/
		/** -----------------------------**/
//		vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv		
		
		
function neighbor(){}

// Begin THREE.JS functions
function animate(){}
function render(){}

var categories = [];

function allowDrop(ev){
	ev.preventDefault();
}
function drag(ev){
	ev.dataTransfer.setData("Text",ev.target.id);
}
function drop(ev){
	ev.preventDefault();
	//convertDragDrop(ev);
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}
function convertDragDrop(ev){
	// converts the Text category object into an object recognized by webGL renderer
}

function signup_ajax(){
	s
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
function findNearest Neighbor

