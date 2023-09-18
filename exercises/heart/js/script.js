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
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas (500,500)
}


/**
 * Description of draw()
*/
function draw() {

//make it red 
    fill(random(255), random(255), random(255));
    frameRate(1);
stroke(0,0,0,0); 

//draw heart
rect(335, 255, 5, 40)
rect(325, 250, 10, 60);
rect(320, 250, 15, 60);
rect(310, 245, 15, 80);
rect(295, 240, 15, 95);
rect(280, 240, 15, 100);
rect(265, 245, 15, 105);
rect(250, 250, 15, 105);
rect(235, 245, 15, 105); 
rect(220, 240, 15, 100);
rect(205, 240, 15, 95);
rect(190, 245, 15, 80);
rect(185, 250, 5, 60); 
rect(180, 250, 5, 60);
rect(175, 255, 5, 40);
}




