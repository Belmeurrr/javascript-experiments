
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

  for(var i = 0; i < drops.length; i++){
    drops[i].show();
    drops[i].fall();
  }
  
}

