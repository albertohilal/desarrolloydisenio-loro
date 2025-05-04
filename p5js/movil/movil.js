let spr;

function preload() {
  // Crear sprite desde el principio, sin moverlo aún
  spr = createSprite(0, 0, 40, 80);
  spr.addAnimation('standing',
    'data/loro_0.png',
    'data/loro_1.png',
    'data/loro_2.png',
    'data/loro_3.png',
    'data/loro_4.png',
    'data/loro_5.png',
    'data/loro_6.png',
    'data/loro_7.png',
    'data/loro_8.png',
    'data/loro_9.png',
    'data/loro_10.png',
    'data/loro_11.png',
    'data/loro_12.png',
    'data/loro_13.png',
    'data/loro_14.png',
    'data/loro_15.png'
  );
}

function setup() {
  createCanvas(windowWidth, 1000); // Tamaño dinámico
  // Posicionar al centro con y = 100
  spr.position.x = 200;
  spr.position.y = 200;
}

function draw() {
  background(117, 170, 219);
  drawSprites();
}

function mouseMoved() {
  // Solo permitir movimiento si está dentro del canvas visible
  if (mouseY > 0 && mouseY < height) {
    spr.position.y = mouseY;
  }
}
