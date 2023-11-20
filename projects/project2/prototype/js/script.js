/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let typewriter;

let aliceAsset;
let gravityForce = 0.0025;

let alices = [];   //create an array for the apples
let numAlices = 1;

let hole;

let state = "one";

/**
 * Description of preload
*/
function preload() {
    hole = loadImage('assets/images/hole.png');
    aliceAsset = loadImage('assets/images/fallAl.png');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    typewriter = new Typewriter();

    for (let i = 0; i < numAlices; i++) {
        let x = windowWidth / 2;      //good apples fall at a random x and y
        let y = -400;
        let alice = new Alice(x, y, aliceAsset);
        alices.push(alice);
    }

}


/**
 * Description of draw()
*/
function draw() {
    if (state === "title") {
        game();
    }
    else if (state === "one") {
        one();
    }
}



function game() {
    background(0, 0, 0);
    image(hole, windowWidth / 18, windowHeight / 120, windowWidth, windowHeight);
    typewriter.display();

    for (let i = 0; i < alices.length; i++) {

        if (alices[i].active) { //calls the functions in the apple class that drops the apples
            alices[i].gravity(gravityForce);
            alices[i].move();
            alices[i].display();
        }

    }
}

function keyPressed() {
    typewriter.typewrite(`Alice in Wonderland`, windowWidth / 18, windowHeight / 2);
}

function one() {
    background(0, 0, 0);
    image(hole, windowWidth / 18, windowHeight / 120, windowWidth, windowHeight);
    for (let i = 0; i < alices.length; i++) {

        if (alices[i].active) { //calls the functions in the apple class that drops the apples
            alices[i].follow();
            alices[i].display();
        }

    }
}

