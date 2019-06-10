const c = 20;
const G = 1;
const dt = 0.3;

let m87;

const particles = [];
let start, end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  m87 = new Blackhole(width / 2, height / 2, 10000);

  start = height / 2;
  end = height / 2 - m87.rs * 2.6;

  for (let y = 0; y < start; y += 5) {
    particles.push(new Photon(width - 10, y));
  }
}

function draw() {
  background(255);

  stroke(0);
  strokeWeight(0.25);
  line(0, start, width, start);
  line(0, end, width, end);

  for (let p of particles) {
    m87.pull(p);
    p.update();
    p.show();
  }
  m87.show();
}
