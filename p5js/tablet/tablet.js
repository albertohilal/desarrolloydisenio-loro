//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
let spr;
let img;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {
  // create an animation from a sequence of numbered images
  // NOTE: the web editor conversion of image names to file paths
  // makes it so that we can't use the p5.play feature that
  // fills in the numbers in between... so we have to list them all here.
 spr = createSprite(300, 457, 40, 80);
 
 
 
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
  createCanvas(800, 1280);
  
}

function draw() {
  background(117,170,219);
 
  drawSprites();
}
function mouseMoved()
{
   if((mouseY>windowHeight * 0.2) && (mouseY<windowHeight * 0.9))
   {
    spr.position.y = mouseY;
   }
   else
   {
     spr.position.y = windowHeight * 0.5;
   }
}
