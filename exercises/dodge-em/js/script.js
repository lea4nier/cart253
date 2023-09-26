/**
 * Dodge-Em Exercise
 * Léa Fournier
 * 
 * Miss Universe 2023
 */


let crown; 
let queen1; 
let queen2;

let X = 0; 
let Y = 0; 
let size1 = 100; 
let size2 = 200; 

// loading images
function preload () {
  crown = loadImage ("assets/images/crown.png")     
  queen1 = loadImage("assets/images/queen1.png");
  queen2 = loadImage("assets/images/queen2.png"); 
}

// create canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(245, 2, 140);

  //display text 
  textSize(20);
  text("WHO WILL WIN MISS UNIVERSE??", 155, 100);
  fill(255);

  // display crown and pageants queens 
  image(crown, mouseX, mouseY, 70, 70);

  image(queen1,X,Y, size1, size1+20);

  image(queen2, 200, 400 - Y, size2, size2+20); 


  // pageant queens move 
  if (X > width || Y > height) {
    X = 0
    Y = 0
    size1 = 200
    size2 = 200

  } else {
    X += 3
    Y += 3
    size1 += 0.25
    size2 -= 0.25
  }

}

function mousePressed(){
  
}