window.addEventListener('load', init);

function init() {
  // サイズを指定
  const width = 960;
  const height = 540;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  // カメラの初期座標を設定
  camera.position.set(0, 2, -13);

  // カメラコントローラーを作成
  const controls = new THREE.OrbitControls(camera,document.body);

  // 平行光源1
  var directionalLight1 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(100, 100, 100);
  scene.add(directionalLight1);
  // 平行光源2
  var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(-100, 100, 100);
  scene.add(directionalLight2);
  // 平行光源3
  var directionalLight3 = new THREE.DirectionalLight(0xffffff);
  directionalLight3.position.set(100, 100, -100);
  scene.add(directionalLight3);

  var textureLoader = new THREE.TextureLoader();  
  var texture = textureLoader.load("flooring.jpg");
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  var bump = textureLoader.load("flooring.jpg");
  mat.bumpMap = bump;
  mat.bumpscale = 0.02;

  var textureLoader2 = new THREE.TextureLoader();  
  var texture2 = textureLoader2.load("sofa.jpg");
  var mat2 = new THREE.MeshPhongMaterial();
  mat2.map = texture2;
  var bump2 = textureLoader.load("sofa.jpg");
  mat2.bumpMap = bump2;
  mat2.bumpscale = 0.04;

  var textureLoader3 = new THREE.TextureLoader();  
  var texture3 = textureLoader2.load("table_foot.jpg");
  var mat3 = new THREE.MeshPhongMaterial();
  mat3.map = texture3;
  var bump3 = textureLoader.load("table_foot.jpg");
  mat3.bumpMap = bump3;
  mat3.bumpscale = 0.08;

  var textureLoader4 = new THREE.TextureLoader();  
  var texture4 = textureLoader4.load("wood.jpg");
  var mat4 = new THREE.MeshPhongMaterial();
  mat4.map = texture4;
  var bump4 = textureLoader.load("wood.jpg");
  mat4.bumpMap = bump4;
  mat4.bumpscale = 0.03;

  var textureLoader5 = new THREE.TextureLoader();  
  var texture5 = textureLoader5.load("concrete.jpg");
  var mat5 = new THREE.MeshPhongMaterial();
  mat5.map = texture5;
  var bump5 = textureLoader.load("concrete.jpg");
  mat5.bumpMap = bump5;
  mat5.bumpscale = 0.01;

// 平面を作成
var planeGeometry = new THREE.PlaneGeometry(8,8,8,8);
var plane = new THREE.Mesh(planeGeometry,mat);
plane.rotation.set( -Math.PI/2, 0, 0 );
plane.position.set(0,0,0);

var planeGeometry2 = new THREE.PlaneGeometry(8,4,8,4);
var plane2 = new THREE.Mesh(planeGeometry2,mat5);
plane2.rotation.set( 0, -Math.PI/2, 0 );
plane2.position.set(4, 2, 0);

var plane3 = new THREE.Mesh(planeGeometry2,mat5);
plane3.rotation.set( 0, -Math.PI/2, 0 );
plane3.position.set(-4, 2, 0);

var planeGeometry3 = new THREE.PlaneGeometry(8,4,8,4);
var plane4 = new THREE.Mesh(planeGeometry3,mat5);
plane4.position.set(0, 2, 4);

// 部品1を作成
var sofa1_g = new THREE.BoxGeometry( 3, 2.4, 0.7);
var sofa1 = new THREE.Mesh(sofa1_g, mat2);
sofa1.position.set(0, 1.2,3.6);

//部品2を作成
var sofa2_g = new THREE.BoxGeometry( 3, 0.8, 1.8);
var sofa2 = new THREE.Mesh( sofa2_g, mat2);
sofa2.position.set(0,0.4,2.35);

//部品3を作成
var sofa3_g = new THREE.BoxGeometry( 0.7, 1.3, 2.5);
var sofa3 = new THREE.Mesh( sofa3_g, mat2);
sofa3.position.set(-1.85, 0.63, 2.6);

//部品4を作成
var sofa4 = new THREE.Mesh( sofa3_g, mat2);
sofa4.position.set(1.85, 0.63, 2.6);

//テーブル1を作成
var table1_g = new THREE.BoxGeometry( 4.8, 0.2, 1.95 );
var table1 = new THREE.Mesh( table1_g, mat4);
table1.position.set(0,1.07,-1.1);

//テーブル2を作成
var table2_g = new THREE.BoxGeometry( 4, 0.1, 1.8 );
var table2 = new THREE.Mesh( table2_g, mat4);
table2.position.set(0,0.4,-1.1);

//テーブル足の作成
var table3_g = new THREE.CylinderGeometry( 0.13, 0.2, 1.0, 20, false);
var table3 = new THREE.Mesh( table3_g, mat3);
var table4 = new THREE.Mesh( table3_g, mat3);
var table5 = new THREE.Mesh( table3_g, mat3);
var table6 = new THREE.Mesh( table3_g, mat3);
table3.position.set(1.93, 0.47,-0.28);
table4.position.set(1.93, 0.47,-1.85);
table5.position.set(-1.93, 0.47,-0.28);
table6.position.set(-1.93, 0.47,-1.85);

const liv = new THREE.Group();
 liv.add(sofa1); 
 liv.add(sofa2); 
 liv.add(sofa3); 
 liv.add(sofa4); 
 liv.add(table1); 
 liv.add(table2); 
 liv.add(table3); 
 liv.add(table4); 
 liv.add(table5); 
 liv.add(table6);
 liv.add(plane);
 liv.add(plane2);
 liv.add(plane3)
 liv.add(plane4);
 liv.position.set(0,0,0);//ペンギングループの原点の位置
scene.add(liv);
 //全体のオブジェクト



  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}