

function Cycle(player, x0, y0){
  var fireworks = [];
  var t = 0;

  this.x = x0;
  this.y = y0;
  this.yspeed = 0;
  this.total = 1;
  this.tail = [];
  this.player = player;

  if(this.player == 1){
    this.r = 0;
    this.g = 255;
    this.b = 255;
    this.xspeed = scl;
  }else if(this.player == 2){
    this.r = 255;
    this.g = 150;
    this.b = 0;
    this.xspeed  = -scl;
  }

  this.hit = function(x, y){
    for(var i = 0; i < this.tail.length-1; i++){//check if cycle hit itself
      var pos = this.tail[i];
      var e = dist(this.x, this.y, pos.x, pos.y);
      if(e < scl || this.x < 0 || this.y < 0 || this.x > width || this.y > height){
        end = true;
        if(player==1) win = '2';
        else win = '1';
      }
    }
    if(player == 1){
    for(var i = 0; i < d.tail.length-1; i++){//check if cycle hit itself
      pos = d.tail[i];
      e = dist(this.x, this.y, pos.x, pos.y);
      if(e < scl){
        end = true;
        win = '2';
      }
    }
  }else{
    for(var i = 0; i < c.tail.length-1; i++){//check if cycle hit itself
      pos = c.tail[i];
      e = dist(this.x, this.y, pos.x, pos.y);
      if(e < scl){
        end = true;
        win = '1';
      }
    }
  }
  }

  this.endGraphic = function(){
    pause = true;
    var winner;
    if(this.player == 1) winner = '2';
    else winner = '1';
    let s = 'PLAYER ' + winner + ' WINS';
    fill(200);
    textAlign(CENTER);
    textSize(25);
    text(s, width/2, height/2, 50);

    t++;
    if(t < 50){
    fireworks.push(new Firework(this.x, this.y));
  }
    for(var i = 0; i < fireworks.length; i++){
      fireworks[i].update();
      fireworks[i].show();
    }
  }

  this.dir = function(x, y){
    this.xspeed = x*scl;
    this.yspeed = y*scl;
  }

  this.update = function(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    if(this.total === this.tail.length){
      for(var i = 0; i < this.tail.length-1; i++){
        this.tail[i] = this.tail[i + 1];
      }
    }

    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = constrain(this.x, -scl, width + scl);
    this.y = constrain(this.y, -scl, height + scl);
    if(this.total < 100) this.total++;
  }

  this.show = function(){
    fill(this.r, this.g, this.b);
    strokeWeight(0);
    for(var i = 0; i < this.tail.length; i++){
    rect(this.tail[i].x, this.tail[i].y, scl, scl);
  }
  if(this.xspeed < 0) rect(this.x, this.y, scl*2, scl);
  else if(this.xspeed > 0) rect(this.x-scl, this.y, scl*2, scl);
  else if(this.yspeed < 0)rect(this.x, this.y, scl, scl*2);
  else if(this.yspeed > 0)rect(this.x, this.y-scl, scl, scl*2);
  }
}
