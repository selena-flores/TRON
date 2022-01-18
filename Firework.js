


function Firework(x, y){

  this.firework = new Particle(x, y);

  this.t = 0;

  this.update = function(){
    this.t+=.1;
    this.xComp = -this.firework.velX/10*sin(this.t);
    this.yComp = -this.firework.velY/10*sin(this.t);

    this.gravity = createVector(this.xComp, this.yComp);
    this.firework.applyForce(this.gravity);
    this.firework.update();
  }

  this.show = function(){
    this.firework.show();
  }


}
