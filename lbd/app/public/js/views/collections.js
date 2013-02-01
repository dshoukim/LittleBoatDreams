$(document).ready(function(){
	
  var camera, scene, renderer;
    var geometry, material, mesh;
	var parent;

    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;

		//camera.position.x = 100;
		//camera.position.y = 100;
		//camera.lookAt(new THREE.Vector3(0,0,0));
		parent = new THREE.Object3D();

        scene = new THREE.Scene();
		var z1 = new LBD.Zone();
		console.log(z1);
		//parent.addToParent(z1);

        geometry = new THREE.CubeGeometry( 2, 2, 2 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
		parent.rotation.x = 90;
		scene.add( parent );
		_initGround();

        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );

    }

    function animate() {

        // note: three.js includes requestAnimationFrame shim
        requestAnimationFrame( animate );

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;

        renderer.render( scene, camera );

    }

	function _initGround(){
		var grid = new THREE.ParticleSystem( 
			new THREE.PlaneGeometry( 15000, 15000, 64, 64 ),
			new THREE.ParticleBasicMaterial({
				color: 0x000000,
				size: 15
			})
		);
		
		var grid2 = new THREE.Mesh(
			new THREE.PlaneGeometry( 15000, 15000, 64, 64),
			new THREE.MeshLambertMaterial({
				color: 			0xFFFFFF,
				transparent: 	true,
				opacity:		0.25
			})
		);
		
		grid.position.y = 0;
		grid2.position.y = 0;
		
		parent.add( grid);
		parent.add(grid2);
	}
})