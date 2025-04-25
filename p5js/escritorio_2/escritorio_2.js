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
 spr = createSprite(600, 300, 50, 100);
 
 
 
  spr.addAnimation('standing',
                     'data/loro_0.png',
                     'data/loro_1.png',
                     'data/loro_2.png',
                     'data/loro_3.png',
                     'data/loro_4.png',
                     'data/loro_5.png',
                     'data/loro_6.png',
                     );
}

function setup() {
  createCanvas(960, 500);
  
}

function draw() {
  background(117,170,219);
 
  drawSprites();
}
function mouseMoved()
{
   if((mouseY>windowHeight* 0.1) && (mouseY<windowHeight* 0.9))
   {
    spr.position.y = mouseY;
   }
   else
   {
     spr.position.y = windowHeight * 0.5;
   }
}
