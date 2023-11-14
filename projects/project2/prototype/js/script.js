/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let aliceAsset;

let hole;

let state = "title";

/**
 * Description of preload
*/
function preload() {
    hole = loadImage('assets/images/hole.png');
    aliceAsset = ('assets/images/fallAl.png');
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
    if (state === "title") {
        start();
    }
    else if (state === "falling") {
        game();
    }
}

function start() {
    background(0, 0, 0);
}

function keyPressed() {
    if (keyCode === 32)       //if the user presses the space bar the state changes to game 
        state = 'falling';
}



function game() {
    background(0, 0, 0);
    image(hole, windowWidth / 18, windowHeight / 120, windowWidth, windowHeight);

    // for (let i = 0; i < apples.length; i++) {

    //     if (apples[i].active) { //calls the functions in the apple class that drops the apples
    //         apples[i].gravity(gravityForce);
    //         apples[i].move();
    //         catchApple(apples[i]);
    //         apples[i].display();
    //     }
    // }
}

