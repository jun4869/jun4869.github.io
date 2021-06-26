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
  renderer.setClearColor(0xeeeeff);

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
  var texture = textureLoader.load("img/flooring.jpg");
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  var bump = textureLoader.load("img/flooring.jpg");
  mat.bumpMap = bump;
  mat.bumpscale = 0.02;

  var textureLoader2 = new THREE.TextureLoader();  
  var texture2 = textureLoader2.load("img/sofa.jpg");
  var mat2 = new THREE.MeshPhongMaterial();
  mat2.map = texture2;
  var bump2 = textureLoader.load("img/sofa.jpg");
  mat2.bumpMap = bump2;
  mat2.bumpscale = 0.04;

  var textureLoader3 = new THREE.TextureLoader();  
  var texture3 = textureLoader2.load("img/table_foot.jpg");
  var mat3 = new THREE.MeshPhongMaterial();
  mat3.map = texture3;
  var bump3 = textureLoader.load("img/table_foot.jpg");
  mat3.bumpMap = bump3;
  mat3.bumpscale = 0.08;

  var textureLoader4 = new THREE.TextureLoader();  
  var texture4 = textureLoader4.load("img/wood.jpg");
  var mat4 = new THREE.MeshPhongMaterial();
  mat4.map = texture4;
  var bump4 = textureLoader.load("img/wood.jpg");
  mat4.bumpMap = bump4;
  mat4.bumpscale = 0.03;

  var textureLoader5 = new THREE.TextureLoader();  
  var texture5 = textureLoader5.load("black.jpg");
  var mat5 = new THREE.MeshPhongMaterial();
  mat5.map = texture5;

// 平面を作成
var planeGeometry = new THREE.PlaneGeometry(8,8,8,8);
var plane = new THREE.Mesh(planeGeometry,mat);
plane.rotation.set( -Math.PI/2, 0, 0 );
plane.position.set(0,0,0);

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
//テレビ台
var dai_g = new THREE.BoxGeometry( 6, 1.2, 1.8);
var dai = new THREE.Mesh( dai_g, mat4);
dai.position.set(0,0.55, -3.5);

//テレビ部品1
var tv_g = new THREE.BoxGeometry( 1, 0.06, 0.8);
var tv = new THREE.Mesh( tv_g, mat2);
tv.position.set(0, 1.18, -3.5);

//テレビ部品2
var tv2_g = new THREE.BoxGeometry( 1, 0.08, 0.8);
var tv2 = new THREE.Mesh( tv2_g, mat5);
tv2.position.set(0, 1.18, -3.5);

//テレビ部品3
var tv3_g = new THREE.BoxGeometry( 0.4, 1.4, 0.1);
var tv3 = new THREE.Mesh( tv3_g, mat5);
tv3.position.set(0, 1.18, -3.6);

//テレビ部品4
var tv4_g = new THREE.BoxGeometry( 0.7, 0.5, 0.15);
var tv4 = new THREE.Mesh( tv4_g, mat5);
tv4.position.set(0, 1.85, -3.6);

//テレビ部品5
var tv5_g = new THREE.BoxGeometry( 3, 1.4, 0.08);
var tv5 = new THREE.Mesh( tv5_g, mat5);
tv5.position.set(0, 2, -3.5);

//テレビ部品5
var sp_g = new THREE.BoxGeometry( 0.7, 1.1, 1.3);
var sp = new THREE.Mesh( sp_g, mat5);
var sp2 = new THREE.Mesh( sp_g, mat5);
sp.position.set(2.2, 1.7, -3.5);
sp2.position.set(-2.2, 1.7, -3.5);

var coneGeometry = new THREE.CylinderGeometry( 0, 0.1, 0.2, 32);
var coneGeometry2 = new THREE.CylinderGeometry( 0, 0.16, 0.2, 32);
var coneMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
var cone = new THREE.Mesh(coneGeometry, coneMaterial);
var cone3 = new THREE.Mesh(coneGeometry, coneMaterial);
var cone2 = new THREE.Mesh(coneGeometry2, coneMaterial);
var cone4 = new THREE.Mesh(coneGeometry2, coneMaterial);
cone.rotation.set(-Math.PI/2, 0, 0 );
cone2.rotation.set(-Math.PI/2, 0, 0 );
cone3.rotation.set(-Math.PI/2, 0, 0 );
cone4.rotation.set(-Math.PI/2, 0, 0 );
cone.position.set(2.2, 1.84, -2.94);
cone2.position.set(2.2, 1.4, -2.94);
cone3.position.set(-2.2, 1.84, -2.94);
cone4.position.set(-2.2, 1.4, -2.94);

var textureLoader6 = new THREE.TextureLoader();  
var texture6 = textureLoader6.load("plant.png");
const material6 = new THREE.SpriteMaterial({ map: texture6,});

const sprite = new THREE.Sprite(material6);
sprite.scale.set(1, 5, 4)
sprite.position.set(-3.7, 2.5, -3.5)

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
 liv.add(dai);
 liv.add(tv);
 liv.add(tv2);
 liv.add(tv3);
 liv.add(tv4);
 liv.add(tv5);
 liv.add(sp);
 liv.add(sp2);
 liv.add(cone);
 liv.add(cone2);
 liv.add(cone3);
 liv.add(cone4);
 liv.add(plane);
 liv.add(sprite);
 liv.position.set(0,0,0);
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