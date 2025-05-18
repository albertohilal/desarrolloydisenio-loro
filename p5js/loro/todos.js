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
  const canvasHeight = 400;
  cnv = createCanvas(windowWidth, canvasHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '9999');
  cnv.style('position', 'absolute');
  cnv.style('pointer-events', 'auto');
  cnv.style('top', '0');
  cnv.style('left', '0');

  spr.position.x = -100;
  spr.position.y = canvasHeight / 2;

  spr.scale = 0.4; // Tamaño fijo proporcional, sin deformar
}

function draw() {
  clear();

  if (startAnimation) {
    animationProgress += 2;
    spr.position.x = -100 + animationProgress;
    spr.position.y = height / 2 + sin(radians(animationProgress)) * 8;

    if (spr.position.x > width / 2) {
      startAnimation = false;
    }
  } else {
    let targetX = constrain(mouseX, 50, width - 50);
    let targetY = constrain(mouseY, 20, height - 20);
    spr.position.x = lerp(spr.position.x, targetX, 0.05);
    spr.position.y = lerp(spr.position.y, targetY, 0.07);
  }

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, 120);
}
