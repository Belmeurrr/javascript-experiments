var n = 0;
var c = 4;



function setup() {
  // put setup code here
  createCanvas(600, 800);
  background(0);

}

function draw() {
  // put drawing code here

  var q = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255); 

  var a = n * 137.5;
  var r = c * sqrt(n);

  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height /2;

  fill(a % 256, 0, 255);
  ellipse(x, y, 4, 4);
  scale(4);

  n++;
}


