var init = function(){
  var width = 800;
  var height = 600;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(45, width/height,1, 1000);

  var geometry = new THREE.PlaneGeometry( 5.5, 9.8, 1 );
  var material = new THREE.MeshPhongMaterial( {color: 0xFFFFFF,side:THREE.DoubleSide} );
  var plane = new THREE.Mesh( geometry, material );
  plane.position.set(0, -1, -16);
  scene.add( plane );

  var geometry = new THREE.BoxGeometry(0.4, 0.4 ,2.5);
  var material = new THREE.MeshPhongMaterial({color:0xFF0000});
  var box = new THREE.Mesh(geometry, material);
  box.position.set(0, 3, -10);
  scene.add(box);

  var coneGeometry = new THREE.ConeGeometry( 0.42, 1, 3 ); 
  var coneMaterial = new THREE. MeshPhongMaterial( {color: 0xFFA500} );
  var cone = new THREE.Mesh( coneGeometry, coneMaterial );
  cone.position.set( 0, -0.3, 1 );
  scene.add( cone );      

  var sphereGeometry = new THREE.SphereGeometry(0.35, 20 , 20);
  var sphereMaterial = new THREE.MeshPhongMaterial({color:0x0000ff, wireframe:true});
  var sphereMaterial2 = new THREE.MeshPhongMaterial({color:0x00ff00, wireframe:true});
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  var sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial2);
  sphere.position.set(1.2, 1.0, 0);
  sphere2.position.set(-1.3, 1.0, 0.3);
  scene.add(sphere);
  scene.add(sphere2);

  var torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 6, 12);
  var torusMaterial = new THREE.MeshPhongMaterial({color:0x6699FF});
  var torusMaterial2 = new THREE.MeshPhongMaterial({color:0xff8800});
  var torus1 = new THREE.Mesh(torusGeometry, torusMaterial);
  var torus2 = new THREE.Mesh(torusGeometry, torusMaterial2);
  torus1.position.set(4.3, 1.0, -10);
  torus2.position.set(-5, 1.0, -15);
  scene.add(torus1);
  scene.add(torus2);

  var torusKnotGeometry = new THREE.TorusKnotGeometry( 0.8, 0.2, 6, 4, 1, 5 ); 
  var torusKnotMaterial = new THREE. MeshPhongMaterial( { color: 0xFF0000, wireframe: true } );
  var torusKnot = new THREE.Mesh( torusKnotGeometry, torusKnotMaterial );
  torusKnot.position.set( 0, -3.5, -25 );
  scene.add( torusKnot );



  var directionalLight1 = new THREE.DirectionalLight(0xffffff);directionalLight1.position.set(1, 1, 1);
  scene.add(directionalLight1);
 var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(-1, 1, 1);
  scene.add(directionalLight2) 

  var update = function(){
    requestAnimationFrame(update);

    box.rotation.x+= 0.013;
    box.rotation.y+= 0.018;
    cone.position.z-= 0.03;
    sphere.rotation.x+= 0.02;
    sphere2.rotation.y+= 0.07;
    sphere.position.z-= 0.02;
    sphere2.position.z-= 0.025;
    torusKnot.position.z+= 0.03;
    torus1.position.x-= 0.015;
    torus2.position.x+= 0.02;

    renderer.render(scene, camera);
  };
  update();
}
window.addEventListener('DOMContentLoaded',init);