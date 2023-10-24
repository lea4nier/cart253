/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let fish = {
    x: 0,
    y: 0,
    size: 50,
    trail: [] // Note that we are creating an EMPTY TRAIL ARRAY as a PROPERTY of the circle
  };

let shark = {
    x: 100,
    y: 100,
    size: 100,
    active: false
};
let sharks = [];

let swarm = []; 

let home;

let moveDistance = 0;
let sharkThreshold = 1000;

let state = "title"

/**
 * Description of preload
*/

function preload() {
home = loadImage("assets/images/title.png");
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
    for (let i = 0; i < fish.trail.length; i++) {
        // Get the element at the index indicated by i (0, then 1, then 2, etc.)
        let element = fish.trail[i];
        // Draw an ellipse the same size as the circle at that position
        ellipse(element.x, element.y, fish.size);
      }
    
      // Move the circle to the mouse position
      fish.x = mouseX;
      fish.y = mouseY;
    
      // Draw the circle
      push();
      fill(255,0,0);
      ellipse(fish.x, fish.y, fish.size);
      pop();
    
    if (shark.active) {
        ellipse(shark.x, shark.y, shark.size);
    }
}

function moveSharks() {
    for (let shark of sharks) {
        shark.x += shark.vx;
        shark.y += shark.vy;
    }
}

function mouseMoved() {
    moveDistance += dist(pmouseX, pmouseY, mouseX, mouseY);
    if (moveDistance >= sharkThreshold) {
        shark.active = true;
    }
}
    
  