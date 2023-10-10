/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let state = "title"

/**
 * Description of preload
*/
function preload() {
    cat = loadImage(assets/images/cat.png);
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
}

function title(){
    image(cat, 0, 0, width, height, 0, 0, cat.width, cat.height, CONTAIN, LEFT);
}