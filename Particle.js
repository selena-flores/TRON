

function Particle(x, y){

  this.pos = createVector(x, y);
  this.velX = random(-10, 10);
  this.velY = random(-10, 10);
  this.vel = createVector(this.velX, this.velY);
  this.acc = createVector(0, 0);

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function(){
    fill(255);
    rect(this.pos.x, this.pos.y, 2, 2);
  }
}
