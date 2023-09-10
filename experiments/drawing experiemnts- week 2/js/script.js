/**
 * Drawing Experiments
 * Léa Elizabeth Fournier
 * 
 * Experimetig with p5's drawing and color 
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 drawing a rainbow cone
*/
function setup() {
createCanvas(500, 500);

background(52, 235, 207);

noStroke();

ellipseMode(CORNER);
fill(237, 0, 0, 50);
ellipse(250, 250, 100, 100);

fill(255, 132, 0, 50);
ellipse(250, 250, 80, 80);

fill(246, 255, 0, 50);
ellipse(250, 250, 60, 60); 

fill(64, 255, 0, 50);
ellipse(250, 250, 40, 40);

fill(255, 201, 252, 50);
ellipse(250, 250, 20, 20); 
}


/**
 * Description of draw()
*/
function draw() {

}