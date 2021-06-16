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


// 平面を作成
var planeGeometry = new THREE.PlaneGeometry(8,8,8,8);
var planeMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
var plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.set( -Math.PI/2, 0, 0 );
plane.position.set(0,0,0);

// 部品1を作成
var sofa1_g = new THREE.BoxGeometry( 3, 2.4, 0.7);
var material_1 = new THREE.MeshPhongMaterial({ color: 0x0000ff });
var sofa1 = new THREE.Mesh(sofa1_g, material_1);
sofa1.position.set(0, 1.2,3.6);//allの中心が原点になる

//部品2を作成
var sofa2_g = new THREE.BoxGeometry( 3, 0.8, 1.8);
var material_2 = new THREE.MeshPhongMaterial({ color: 0xff0000 });
var sofa2 = new THREE.Mesh( sofa2_g, material_1);
sofa2.position.set(0,0.4,2.35);

//部品3を作成
var sofa3_g = new THREE.BoxGeometry( 0.7, 1.3, 2.5);
var material_3 = new THREE.MeshPhongMaterial({ color: 0x770077 });
var sofa3 = new THREE.Mesh( sofa3_g, material_3);
sofa3.position.set(-1.85, 0.63, 2.6);

//部品4を作成
var sofa4 = new THREE.Mesh( sofa3_g, material_3);
sofa4.position.set(1.85, 0.63, 2.6);

//テーブル1を作成
var table1_g = new THREE.BoxGeometry( 4.8, 0.2, 1.95 );
var material_4 = new THREE.MeshPhongMaterial({ color: 0x007777 });
var table1 = new THREE.Mesh( table1_g, material_4);
table1.position.set(0,1.07,-1.1);

//テーブル2を作成
var table2_g = new THREE.BoxGeometry( 4, 0.1, 1.8 );
var material_5 = new THREE.MeshPhongMaterial({ color: 0x007777 });
var table2 = new THREE.Mesh( table2_g, material_5);
table2.position.set(0,0.4,-1.1);

//テーブル足の作成
var table3_g = new THREE.CylinderGeometry( 0.13, 0.2, 1.0, 20, false);
var material_6 = new THREE.MeshPhongMaterial({ color: 0xffff00 });
var table3 = new THREE.Mesh( table3_g, material_6);
var table4 = new THREE.Mesh( table3_g, material_6);
var table5 = new THREE.Mesh( table3_g, material_6);
var table6 = new THREE.Mesh( table3_g, material_6);
table3.position.set(1.93, 0.47,-0.28);
table4.position.set(1.93, 0.47,-1.85);
table5.position.set(-1.93, 0.47,-0.28);
table6.position.set(-1.93, 0.47,-1.85);

const pengin = new THREE.Group();
 pengin.add(sofa1); 
 pengin.add(sofa2); 
 pengin.add(sofa3); 
 pengin.add(sofa4); 
 pengin.add(table1); 
 pengin.add(table2); 
 pengin.add(table3); 
 pengin.add(table4); 
 pengin.add(table5); 
 pengin.add(table6);
 pengin.add(plane);
 pengin.position.set(0,0,0);//ペンギングループの原点の位置
scene.add(pengin);
 //全体のオブジェクト



  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}