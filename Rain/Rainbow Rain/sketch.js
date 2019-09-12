
var drops = [];

function setup() {
  // put setup code here
  createCanvas(1200, 800);
  for(var i = 0; i < 600; i++){
    drops[i] = new Raindrop();
  }
}

function draw() {
  // put drawing code here
  background(0);

  //translate(0, 0, -80);
  //let camX = map(mouseX, 0, width, -200, 200);
	//let camY = map(mouseY, 0, height, -200,200); 
	//camera(camX, camY, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);

  for(var i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].fall();
  }
  
}

