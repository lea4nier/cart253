/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let cat2; 
let banner;
let banner2; 
let instructions1;

let state = "title"

/**
 * Description of preload
*/
function preload() {
    cat2 = loadImage('assets/images/cat2.png');
    banner = loadImage('assets/images/banner.png');
    banner2 = loadImage('assets/images/banner2.png');
    instructions1 = loadImage('assets/images/instructions.png');
}


/**
 * Description of setup
*/
function setup() {
createCanvas(500,500); 
}


/**
 * Description of draw()
*/
function draw() {
background(161, 13, 224);
  
    if (state === `title`) {
        title();
      }

    else if (state === 'instructions') {
        instructions();
      }
}

function title(){
    image(cat2, 80, 80, 420, 370);
    image(banner, 100, 50, 300, 300);
    image(banner2, 100, 320, 300, 300);
}

function keyPressed() {
    if (keyCode === 13)
    state = 'instructions'; 
}

function instructions(){
    image(instructions1, 0, 0, 500, 500); 
}