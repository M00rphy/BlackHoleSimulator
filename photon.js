class Photon {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(-c, 12);
    this.history = [];
    this.stopped = false;
    this.theta = 0;
  }

  stop() {
    this.stopped = true;
  }

  update() {
    if (!this.stopped) {
      //if (frameCount % 5 == 0) {
      this.history.push(this.pos.copy());
      //}
      const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV);
    }

    if (this.history.length > 500) {
      this.history.splice(0, 1);
    }
  }

  show() {
    strokeWeight(2);
    stroke(255, 0, 0);
    point(this.pos.x, this.pos.y);

    strokeWeight(0.5);
    noFill();
    beginShape();
    for (let v of this.history) {
      vertex(v.x, v.y);
    }

    endShape();
  }
}
