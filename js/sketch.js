
let s;
var scl = 5;
var pause = true;
var end = false;
var player;
var win = '';
var start = false;
var width;
var height;

function setup() {
  width = windowWidth/2;
  height = windowHeight/2;
  var cnv = createCanvas(width, height);
  cnv.position(width/2, height/2);
  restartGame();
  pause = true;
}

function tv_background(){
  strokeWeight(1);
  stroke(10);
  var delta = 2;
  for(var i = 0; i < height; i += delta){
    line(0, i, width, i);
  }
  stroke(0, 250, 0);
  noFill();
  rect(1, 1, width-2, height-2);
}

function draw() {
  background(50);
  frameRate(20);
  tv_background();
  if (!pause && !end) {
    c.update();
    d.update();
    c.hit();
    d.hit();
  } else if (!end && pause && start) {
    let s = 'PAUSED';
    fill(200);
    textAlign(CENTER);
    textSize(25);
    text(s, width / 2, height / 2, 50);
  }

  c.show();
  d.show();
  if (win == 1) d.endGraphic();
  else if (win == 2) c.endGraphic();
}

function restartGame() {
  clear();
  win = 0;
  c = new Cycle(1, 0, height / 2);
  d = new Cycle(2, width - scl, height / 2);
  pause = false;
  end = false;
}
