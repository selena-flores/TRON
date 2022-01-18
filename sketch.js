
let s;
var scl = 5;
var pause = true;
var end = false;
var player;
var win = '';
var start = false;

function setup(){
  var cnv = createCanvas(600, 400);
  cnv.center();
  c = new Cycle(1, 0, height/2);
  d = new Cycle(2, width, height/2);
}

function draw(){
  background(10, 10, 10);
  frameRate(45);
   if(!pause && !end){
     c.update();
     d.update();
     c.hit();
     d.hit();
  }else if(!end && pause && start){
    let s = 'PAUSED';
    fill(200);
    textAlign(CENTER);
    textSize(25);
    text(s, width/2, height/2, 50);
  }

  c.show();
  d.show();
  if(win == 1) d.endGraphic();
  else if(win == 2) c.endGraphic();
}

function restartGame(){
  clear();
  win = 0;
  c = new Cycle(1, 0, 0);
  d = new Cycle(2, width - scl, height - scl);
  pause = false;
  end = false;
}

function keyPressed(){
  if(!end && !pause){
  if(keyCode === 87 && d.yspeed == 0){
    d.dir(0, -1);
  }else if(keyCode === 83 && d.yspeed == 0){
    d.dir(0, 1);
  }else if(keyCode === 65 && d.xspeed == 0){
    d.dir(-1, 0);
  }else if(keyCode === 68 && d.xspeed == 0){
    d.dir(1, 0);
  }
  if(keyCode === UP_ARROW && c.yspeed == 0){
    c.dir(0, -1);
  }else if(keyCode === DOWN_ARROW && c.yspeed == 0){
    c.dir(0, 1);
  }else if(keyCode === LEFT_ARROW && c.xspeed == 0){
    c.dir(-1, 0);
  }else if(keyCode === RIGHT_ARROW && c.xspeed == 0){
    c.dir(1, 0);
  }
}
  if(keyCode === ESCAPE){
    restartGame();
  }else if(keyCode === 32){
    if(end){
      restartGame();
    } else {
      if(!start){
        start = true;
      }
      pause = !pause;
    }
  }
}
