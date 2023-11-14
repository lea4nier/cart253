/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let drink = [];

let animate = 0;

let time = 0;

let fr = 10;

/**
 * Description of preload
*/
function preload() {
    drink[0] = loadImage('assets/images/bottle1.png');
    drink[1] = loadImage('assets/images/bottle2.png');
    drink[2] = loadImage('assets/images/bottle3.png');
    drink[3] = loadImage('assets/images/bottle4.png');
    drink[4] = loadImage('assets/images/bottle5.png');
    drink[5] = loadImage('assets/images/bottle6.png');
    drink[6] = loadImage('assets/images/bottle7.png');
    drink[7] = loadImage('assets/images/bottle8.png');
    drink[8] = loadImage('assets/images/bottle9.png');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    frameRate(fr);
}


/**
 * Description of draw()
*/
function draw() {
    fill(0);
    frameRate(fr);
    image(drink[animate], windowWidth / 3, windowHeight / 4, 400, 400);
    if (time < 10) {

        // move to the next index in the array
        animate = animate + 1;
        // reset frame timer
        // time = 0;
    }

    time++;
}