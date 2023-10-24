/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let circle = {
    x: 0,
    y: 0,
    size: 50,
    trail: [] // Note that we are creating an EMPTY TRAIL ARRAY as a PROPERTY of the circle
  }

let fish;
let shark;
let home;


let state = "title"
/**
 * Description of preload
*/
function preload() {
home = loadImage("assets/images/title.png");
fish = loadImage("assets/images/fish.png");
shark = loadImage("assets/images/shark.png");
}


/**
 * Description of setup
*/
function setup() {
createCanvas(600,600);
}


/**
 * Description of draw()
*/
function draw() {
    background(99, 182, 255);
    if (state === "title") {
        title();
    }
    else if (state === "game") {
        game();
    }
}

function title(){
    image(home, 0, 0, 600, 600);
}

function keyPressed() {
    if (keyCode === 32)
    state = 'game'; 
}

function game(){
    for (let i = 0; i < circle.trail.length; i++) {
        // Get the element at the index indicated by i (0, then 1, then 2, etc.)
        let element = circle.trail[i];
        // Draw an ellipse the same size as the circle at that position
        ellipse(element.x, element.y, circle.size);
      }
    
      // Move the circle to the mouse position
      circle.x = mouseX;
      circle.y = mouseY;
    
      // Draw the circle
      ellipse(circle.x, circle.y, circle.size);

}