// Archivo actualizado: escritorio_2.js con animación de entrada fluida y escala constante

let spr;
let cnv;
let startAnimation = true;
let animationProgress = 0;

function preload() {
  // Carga de la animación del loro
  spr = createSprite(-100, 300, 50, 100); // Empieza fuera de pantalla
  spr.addAnimation('standing',
                   'data/loro_0.png',
                   'data/loro_1.png',
                   'data/loro_2.png',
                   'data/loro_3.png',
                   'data/loro_4.png',
                   'data/loro_5.png',
                   'data/loro_6.png');
}

function setup() {
  cnv = createCanvas(960, 500);
  cnv.style('z-index', '100'); // Canvas adelante
  cnv.style('position', 'absolute');
  cnv.style('top', '0');
  cnv.style('left', '0');
  cnv.style('pointer-events', 'none'); // No bloquear clicks

  spr.position.x = -100;
  spr.position.y = height / 2;
  spr.scale = 0.5; // Fijamos escala constante para todo el vuelo
}

function draw() {
  clear(); // Limpia el canvas manteniendo la transparencia

  if (startAnimation) {
    // Avanzar vuelo inicial
    animationProgress += 2; // Velocidad de entrada
    spr.position.x = -100 + animationProgress;
    spr.position.y = height / 2 + sin(radians(animationProgress)) * 50; // Curvatura en Y

    if (spr.position.x > 300) {
      startAnimation = false; // Finalizar animación de entrada
    }
  } else {
    // Movimiento normal restringido en X e Y
    spr.position.x = lerp(spr.position.x, constrain(mouseX, 50, width - 50), 0.05);
    spr.position.y = lerp(spr.position.y, constrain(mouseY, 120, height - 50), 0.1);
  }

  // Coordenadas aproximadas del botón "Descubre más"
  let botonX = width / 2;
  let botonY = 420;

  // Distancia del loro al botón
  let d = dist(spr.position.x, spr.position.y, botonX, botonY);

  // Aceleración de la animación si está cerca del botón
  if (d < 100) {
    spr.animation.frameDelay = 2; // Aleteo rápido
  } else {
    spr.animation.frameDelay = 6; // Aleteo normal
  }

  drawSprites();
}

// Nota:
// El loro ahora mantiene un tamaño constante desde la entrada hasta el seguimiento del mouse.
