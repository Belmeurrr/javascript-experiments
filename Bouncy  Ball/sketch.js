
var balls = [];

function setup() {
  // put setup code here
createCanvas(800, 600)
for(var i = 0; i < 50; i++){
  balls[i] = new Ball();
}


}

function draw() {
  // put drawing code here
  background(0);

  for(var i = 0; i < balls.length; i++){
    balls[i].show();
    balls[i].gravity();
  }
  
}

