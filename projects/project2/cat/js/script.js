/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let catimage;
let choice1;
let choice2;
let choice3;
let catSize = 50; // Initial size
let growthRate = 0.5; // Rate of size increases
let state = "appear"
/**
 * Description of preload
 */
function preload() {
    catimage = loadImage('assets/images/cat1.png');
    choice1 = loadImage('assets/images/choice1.png');
    choice2 = loadImage('assets/images/choice2.png');
    choice3 = loadImage('assets/images/choice3.png');
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
    if (state === "appear") {
        hello();
    }
    else if (state === "talking") {
        talkingcat();
    }
}

function hello() {
    background(0, 0, 0);

    // Increase the cat size
    catSize += growthRate;

    // Check if the size exceeds the limit
    if (catSize > 500) {
        catSize = 500; // Set size to the limit
    }

    if (catSize === 500) {
        state = "talking";
    }

    // Draw the cat image with the updated size
    image(catimage, windowWidth / 3, windowHeight / 4, catSize, catSize);
}

function talkingcat() {
    background(0, 0, 0);
    image(catimage, windowWidth / 3, windowHeight / 4, 500, 500);
    image(choice1, (windowWidth / 3) + 400, windowHeight / 4, 400, 400);
    image(choice2, (windowWidth / 3) + 400, (windowHeight / 4) + 300, 400, 400);
    image(choice3, (windowWidth / 3) - 350, windowHeight / 4, 400, 400);


}