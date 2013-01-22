		
		
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