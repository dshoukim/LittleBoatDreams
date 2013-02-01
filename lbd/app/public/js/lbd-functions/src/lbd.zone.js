var LBD = LBD || {};


LBD.Zone = function(path, obj3D){
	this.href = path || undefined;
	this.name = function(){ 
		if (this.href !== undefined){
			var str = this.href;
			if ( str.charAt(0) == '/' ) var name = str.slice(1);
			if (str.charAt(0) == '.') var name = str.slice(2);
			else console.log('error... invalid href');
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		else return undefined;
	}
	this.object3D = obj3D; // island base for boundary
	this.activeInside = []; // List of User Objects
}
LBD.Zone.prototype = {
	
	constructor: LBD.Zone,
	// a = user Avatar
	isInside: function(a){},
	
}
	
// var LBD.Zone.initGeometry = function(){
// 	var geo = new THREE.CubeGeometry(this.size,this.size,this.size);
// }