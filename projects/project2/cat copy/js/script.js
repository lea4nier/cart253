/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let catimage;
let cat2;
let cat3;
let cat4;

let choice1;
let choice2;
let choice3;

let size = 50; // beginning size of other images
let catSize = 50; //beginning size of cat
let growthRate = 0.5; // growth rate for images
let strobeCat = true; //boolean value for cat to strobe

let state = "appear";
/**
 * Description of preload
 */
function preload() {
    catimage = loadImage('assets/images/cat1.png');  //main cheshire cat image
    cat2 = loadImage('assets/images/cat2.png'); // load other cat images that he will change into later 
    cat3 = loadImage('assets/images/cat3.png');
    cat4 = loadImage('assets/images/cat4.png');

    choice1 = loadImage('assets/images/choice1.png'); //load text bubbles
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
    catSize += growthRate;

    // Check if the size of the cat exceeds the limit
    if (catSize > 500) {
        catSize = 500; // Set size to the limit
    }

    if (strobeCat) {
        // cat appears at growing size 
        image(catimage, windowWidth / 3, windowHeight / 4, catSize, catSize);
    }

    strobeCat = !strobeCat; //image of cat dissapears and reappears to give strobe effect

    if (catSize === 500) {  //once cat is 500px the state switches to talking
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


    if (mouseX > windowWidth / 3 + 400 / 2 && mouseX < windowWidth / 3 + 400 / 2 + size && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + size) {
        catimage = cat2; //if mouse hovers over choice 2 (paint white flowers...) then the cat image changes
    }

    else if (mouseX > windowWidth / 3 + 400 / 2 && mouseX < windowWidth / 3 + 400 / 2 + size && mouseY > windowHeight / 4 + 300 && mouseY < windowHeight / 4 + 300 + size) {
        catimage = cat3; //if mouse hovers over choice 2 (cry) then the cat image changes
    }

    else if (mouseX > windowWidth / 3 - 350 / 2 && mouseX < windowWidth / 3 - 350 / 2 + size && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + size) {
        catimage = cat4; //if mouse hovers over choice 3 (go home) then the cat image changes
    }

    else {
        catimage = catimage;
    }
}

