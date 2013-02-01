var TUtilsTHREE = TUtilsTHREE || {};
TUtilsTHREE.IntroPlane = new function(){
	var camera,
	scene,
	renderer 		= null,
	context 		= null,
	$container 		= $('container'),
	width 			= $container.width(),
	height 			= $container.height(),
	$gui			= $('#gui'),
	vars			= [].
	projector		= new THREE.projector(),
	center			= new THREE.Vector3(),
	running			= true,
	
	surface			= null,
	surfaceVerts	= [],
	tags			= [],
	introText		= {},
	
	this.pause = function() {
		running = false;
	}
	this.play = function() {
		if(!running){
			running = true;
			update();
		}
	}
	
	this.init = function(){
		vars['magnitude']		= 30;
		vars['elasticity'] 		= 0.001;
		addEventListeners();
		if(createRenderer()){
			createObjects();
			addLights();
			update();
		}
	};
	this.init_intro = function(){}
	this.init_interactive = function(){}
	
	this.addLights = function(){
		return lights
	};
	
}