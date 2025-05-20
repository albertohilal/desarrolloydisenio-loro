
let spr;
let animationProgress = 0;
let startAnimation = true;

function preload() {
  spr = createSprite(-100, 100, 50, 100);
  spr.addAnimation('fly',
    'data/loro_0.png',
    'data/loro_1.png',
    'data/loro_2.png',
    'data/loro_3.png',
    'data/loro_4.png',
    'data/loro_5.png',
    'data/loro_6.png'
  );
}

function setup() {
  let cnv = createCanvas(windowWidth, 250);
  cnv.position(0, 0);
  cnv.style('pointer-events', 'none');
  cnv.style('z-index', '9999');
  spr.scale = 0.5;
}

function draw() {
  clear();
  if (startAnimation) {
    animationProgress += 4;
    spr.position.x = -100 + animationProgress;
    spr.position.y = height / 2 + sin(radians(animationProgress)) * 30;
    if (spr.position.x > width / 3) {
      startAnimation = false;
    }
  } else {
    spr.position.x = lerp(spr.position.x, constrain(mouseX, 0, width), 0.1);
    spr.position.y = lerp(spr.position.y, constrain(mouseY, 0, height), 0.1);
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, 250);
}
