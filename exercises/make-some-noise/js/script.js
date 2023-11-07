/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let house;
let lightning = [];
/**
 * Description of preload
*/
function preload() {
    house = loadImage('assets/images/background.png');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);


    lightning = new Lightning(random(width), -5);

}



/**
 * Description of draw()
*/
function draw() {
    background(138, 141, 145);
    image(house, 0, 0, windowWidth, windowHeight);
    lightning.update();
    lightning.show();
}