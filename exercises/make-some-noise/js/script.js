/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let frames = [];
let currentFrame = 0;

let fr = 1;

/**
 * Description of preload
*/
function preload() {
    for (let i = 1; i <= 9; i++) {
        let frame = loadImage('assets/images/bottle' + i + '.png');
        frames.push(frame);
    }
    // drink[0] = loadImage('assets/images/bottle1.png');
    // drink[1] = loadImage('assets/images/bottle2.png');
    // drink[2] = loadImage('assets/images/bottle3.png');
    // drink[3] = loadImage('assets/images/bottle4.png');
    // drink[4] = loadImage('assets/images/bottle5.png');
    // drink[5] = loadImage('assets/images/bottle6.png');
    // drink[6] = loadImage('assets/images/bottle7.png');
    // drink[7] = loadImage('assets/images/bottle8.png');
    // drink[8] = loadImage('assets/images/bottle9.png');
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
    background(0, 0, 0);
    frameRate(fr);
    image(frames[currentFrame], windowWidth / 3, windowHeight / 4, 400, 400);
    // Advance to the next frame (and loop back to 0 if you reach the end)
    currentFrame = (currentFrame + 1);
}