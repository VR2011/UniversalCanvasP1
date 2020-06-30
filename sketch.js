function preload() {

};

function setup() {
  canvas = createCanvas(1200, 400);
};

function draw() {
  
};

function mouseDragged(){
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(mouseX, mouseY, 10, 10);
};