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
let size = 50; // Initial size
let growthRate = 0.5; // Rate of size increases
let strobeCat = "true";

let state = "appear";
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

    // Increases the cat size
    size += growthRate;

    // Check if the size of the cat exceeds the limit
    if (size > 500) {
        size = 500; // Set size to the limit
    }

    if (strobeCat) {
        // cat appears at growing size 
        image(catimage, windowWidth / 3, windowHeight / 4, size, size);
    }

    strobeCat = !strobeCat; //image of cat dissapears and reappears to give strobe effect

    if (size === 500) {  //once cat is 500px the state switches to talking
        state = "talking";
    }


}

function talkingcat() {
    background(0, 0, 0);
    image(catimage, windowWidth / 3, windowHeight / 4, 500, 500);
    // Increases the text bubble sizes
    size += growthRate;

    if (size > 400) {
        size = 400; // Set size to the limit
    }

    image(choice1, (windowWidth / 3) + 400, windowHeight / 4, size, size);
    image(choice2, (windowWidth / 3) + 400, (windowHeight / 4) + 300, size, size);
    image(choice3, (windowWidth / 3) - 350, windowHeight / 4, size, size);


}