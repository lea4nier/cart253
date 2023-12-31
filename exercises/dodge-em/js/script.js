/**
 * Dodge-Em Exercise
 * Léa Fournier
 * 
 * Miss Universe 2023
 * Who will win Miss Universe?? You choose! Crown the queen of your choice...if you can catch her.
 */

// adding variables
let crown; 
let queen1; 
let queen2;
let color = true; 

let X = 0; 
let Y = 0; 

// loading images
function preload () {
  crown = loadImage ("../assets/images/crown.png")     
  queen1 = loadImage("../assets/images/queen1.PNG");
  queen2 = loadImage("../assets/images/queen2.PNG"); 
}

// create canvas
function setup() {
  createCanvas(1000, 1000);
}


function draw() {
  background(245, 2, 140);   //set background to pink

  if (!color){
    background(66, 245, 239);   //background changes to cyan
  }

  //display text 
  textSize(20); 
  text("WHO WILL WIN MISS UNIVERSE??", 350, 200);
  fill(255);

  // display crown and pageants queens 
  image(crown, mouseX, mouseY, 70, 70);

  image(queen1,X,Y, 200, 400);

  image(queen2, 200, 1000 - Y, 200, 400); 


  // pageant queens move 
  if (X > 1000 || Y > 1000) {
    X = 0
    Y = 0

  } else {
    X += 3
    Y += 3
   
  }

}

// queens stop when mouse is pressed
function mousePressed(){
  noLoop();
  color = !color;     //change background color 
}

function mouseReleased() {
  loop();
  color = !color;     //background goes back to pink 
}