var x = 0;
var y = 0;

var nextX;
var nextY;

function setup() {
  // put setup code here
  createCanvas(600, 800);
  background(0);

}

function draw() {
  // put drawing code here

  for (var index = 0; index < 100; index ++) {
    var r = random(1);
    drawPoint(r);
    nextPoint(nextX, nextY, r);
  }
}


function drawPoint(r) {

  if(r < 0.01){
    stroke('yellow');

  }else if(r < 0.86) {
    stroke('cyan');

  }else if(r < 0.93) {

    stroke('green');
        
  }else {
    stroke('red');

  }
  
  fill(255, 204, 0);
  strokeWeight(4);
  

  let px = map(x, -4, 4, 0, width);
  let py = map(y, 0, 10, height, 0);
  

  point(px,py);
}

function nextPoint(nextX, nextY, r) {

  

  if(r < 0.01){
    nextX = 0;
    nextY = 0.16 * y;
  }else if(r < 0.86) {
    nextX = 0.85 * x  + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  }else if(r < 0.93) {

    nextX =  0.2 * x - 0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  }else {
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }

  x = nextX;
  y = nextY;
}

