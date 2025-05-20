let spr;
let cnv;
let startAnimation = true;
let animationProgress = 0;

function preload() {
  spr = createSprite(-100, 300, 50, 100);
  spr.addAnimation('standing',
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
  // Crear canvas de tamaño adaptativo
  let canvasWidth = windowWidth;
  let canvasHeight = windowHeight < 600 ? 500 : 600;

  cnv = createCanvas(canvasWidth, canvasHeight);
  cnv.style('z-index', '100');
  cnv.style('position', 'absolute');
  cnv.style('top', '0');
  cnv.style('left', '0');
  cnv.style('pointer-events', 'none');

  spr.position.x = -100;
  spr.position.y = height / 2;

  // Ajustar escala según tamaño de pantalla
  if (width < 500) {
    spr.scale = 0.3;
  } else if (width < 800) {
    spr.scale = 0.4;
  } else {
    spr.scale = 0.5;
  }
}

function draw() {
  clear();

  if (startAnimation) {
    animationProgress += 2;
    spr.position.x = -100 + animationProgress;
    spr.position.y = height / 2 + sin(radians(animationProgress)) * 50;

    if (spr.position.x > 300) {
      startAnimation = false;
    }
  } else {
    spr.position.x = lerp(spr.position.x, constrain(mouseX, 50, width - 50), 0.05);
    spr.position.y = lerp(spr.position.y, constrain(mouseY, 120, height - 50), 0.1);
  }

  let botonX = width / 2;
  let botonY = height - 80;

  let d = dist(spr.position.x, spr.position.y, botonX, botonY);

  spr.animation.frameDelay = d < 100 ? 2 : 6;

  drawSprites();
}
