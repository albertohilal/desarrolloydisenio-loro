
let spr;
let spriteSheet;
let animationFrames = [];
let frameCount = 16;
let frameWidth = 302;
let frameHeight = 220;

let cnv;
let startAnimation = true;
let animationProgress = 0;

function preload() {
  spriteSheet = loadImage('./data/loro_spritesheet.webp');
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

  for (let i = 0; i < frameCount; i++) {
    let frame = spriteSheet.get(i * frameWidth, 0, frameWidth, frameHeight);
    animationFrames.push(frame);
  }

  spr = createSprite(-100, canvasHeight / 2);
  spr.addAnimation('flying', ...animationFrames);
  spr.scale = 0.25;
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
  resizeCanvas(windowWidth, 400);
}
