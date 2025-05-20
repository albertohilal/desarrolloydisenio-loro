let spr;
let cnv;
let startAnimation = true;
let animationProgress = 0;

function preload() {
  spr = createSprite(-100, 60, 50, 100);
  spr.addAnimation('flying',
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
  cnv = createCanvas(windowWidth, 120);
  cnv.style('position', 'absolute');
  cnv.style('top', '0');
  cnv.style('left', '0');
  cnv.style('z-index', '5');
  cnv.style('pointer-events', 'none');

  spr.position.x = -100;
  spr.position.y = 60; // Centrado vertical en 120px

  spr.scale = 0.4; // Fijo para evitar deformaciones
}

function draw() {
  clear();

  if (startAnimation) {
    animationProgress += 2;
    spr.position.x = -100 + animationProgress;
    spr.position.y = 60 + sin(radians(animationProgress)) * 8;

    if (spr.position.x > width / 2) {
      startAnimation = false;
    }
  } else {
    let targetX = constrain(mouseX, 50, width - 50);
    let targetY = constrain(mouseY, 20, 100);
    spr.position.x = lerp(spr.position.x, targetX, 0.05);
    spr.position.y = lerp(spr.position.y, targetY, 0.07);
  }

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, 120);
}
