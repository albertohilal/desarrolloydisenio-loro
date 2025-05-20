let spr;
let cnv;
let startAnimation = true;
let animationProgress = 0;

function preload() {
  spr = createSprite(-100, 300, 50, 100);
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
  let canvasWidth = windowWidth;
  let canvasHeight = max(windowHeight, 120); // Altura mínima

  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.style('z-index', '100');
  cnv.style('position', 'absolute');
  cnv.style('top', '0');
  cnv.style('left', '0');
  cnv.style('pointer-events', 'none');

  spr.position.x = -100;
  spr.position.y = height / 2;

  // Escala proporcional responsiva
  let scaleFactor = map(width, 320, 1280, 0.3, 0.6);
  spr.scale = constrain(scaleFactor, 0.3, 0.6);
}

function draw() {
  clear();

  if (startAnimation) {
    animationProgress += 2;
    spr.position.x = -100 + animationProgress;
    spr.position.y = height / 2 + sin(radians(animationProgress)) * 50;

    if (spr.position.x > width / 2) {
      startAnimation = false;
    }
  } else {
    let targetX = constrain(mouseX, 50, width - 50);
    let targetY = constrain(mouseY, 100, height - 100);
    spr.position.x = lerp(spr.position.x, targetX, 0.05);
    spr.position.y = lerp(spr.position.y, targetY, 0.07);
  }

  let botonX = width / 2;
  let botonY = height - 80;
  let d = dist(spr.position.x, spr.position.y, botonX, botonY);

  spr.animation.frameDelay = d < 120 ? 2 : 6;

  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, max(windowHeight, 600));
}
