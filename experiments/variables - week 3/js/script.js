/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 100; 
let speed = 1;
let acceleration = 0.2;

/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
    
}


/**
 * Description of draw()
*/
function draw() {
    background(backgroundShade);
    ellipse(circleX,circleY,circleSize);
    circleX = circleX + speed;
    speed = speed + acceleration;
}