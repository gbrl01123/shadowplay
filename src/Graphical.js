define(["lodash", "three"], function(_, THREE) {
  let domContainer = document.getElementById('gui');
  let canvas = document.getElementById('gui');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, domContainer.innerWidth/domContainer.innerHeight, 0.1, 1000);

  // function webglAvailable() {
	// 	try {
	// 		var canvas = document.createElement( 'canvas' );
	// 		return !!( window.WebGLRenderingContext && (
	// 			canvas.getContext( 'webgl' ) ||
	// 			canvas.getContext( 'experimental-webgl' ) )
	// 		);
	// 	} catch ( e ) {
	// 		return false;
	// 	}
	// }

	// if ( webglAvailable() ) {
	// 	renderer = new THREE.WebGLRenderer();
	// } else {
	// 	renderer = new THREE.CanvasRenderer();
	// }
  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(domContainer.innerWidth, domContainer.innerHeight);
  domContainer.appendChild(renderer.domElement);

  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  let cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  render();
});
