
function keyPressed() {
    if (!end && !pause) {
      if (keyCode === 87 && d.yspeed == 0) {
        d.dir(0, -1);
      } else if (keyCode === 83 && d.yspeed == 0) {
        d.dir(0, 1);
      } else if (keyCode === 65 && d.xspeed == 0) {
        d.dir(-1, 0);
      } else if (keyCode === 68 && d.xspeed == 0) {
        d.dir(1, 0);
      }
      if (keyCode === UP_ARROW && c.yspeed == 0) {
        c.dir(0, -1);
      } else if (keyCode === DOWN_ARROW && c.yspeed == 0) {
        c.dir(0, 1);
      } else if (keyCode === LEFT_ARROW && c.xspeed == 0) {
        c.dir(-1, 0);
      } else if (keyCode === RIGHT_ARROW && c.xspeed == 0) {
        c.dir(1, 0);
      }
    }
    if (keyCode === ESCAPE) {
      restartGame();
    } else if (keyCode === 32) {
      if (end) {
        restartGame();
      } else {
        if (!start) {
          start = true;
        }
        pause = !pause;
      }
    }
  }