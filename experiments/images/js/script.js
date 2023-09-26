/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/

let queen1; 

function preload() {
queen1 = loadImage("assets/images/queen1.png");
}


/**
 * Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);
}


/**
 * Description of draw()
*/
function draw() {
background(0);

image(queen1,5,5);
queen1.resize(100,200);
}