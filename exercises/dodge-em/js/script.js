/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let crown; 
let queen1; 
let queen2;

let posX = 0; 
let posY = 0; 
let size1 = 100; 
let size2 = 200; 


function preload () {
  crown = loadImage ("assets/images/crown.png")
  queen1 = loadImage("assets/images/queen1.png");
  queen2 = loadImage("assets/images/queen2.png"); 
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(245, 2, 140);

  textSize(20);
  text("WHO WILL WIN MISS UNIVERSE??", 155, 100);
  fill(255);

  image(crown, mouseX, mouseY, 60, 60);

  image(queen1,posX,posY, size1, size1+20);

  image(queen2, 200, 400 - posY, size2, size2+20); 

  if (posX > width || posY > height) {
    posX = 0
    posY = 0
    size1 = 100
    size2 = 200

  } else {
    posX += 3
    posY += 3
    size1 += 0.5
    size2 -=0.25
  }

}
