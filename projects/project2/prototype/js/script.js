/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let clickCount = 0;
let typewriter;

let aliceAsset;
let gravityForce = 0.0025;

let alices = [];   //create an array for the apples
let numAlices = 1;

let cupAsset;
let cupImages = [];
let cups = [];
let numCups = 6;

let hole;

let state = "title";

/**
 * Description of preload
*/
function preload() {
    hole = loadImage('assets/images/down.png');
    aliceAsset = loadImage('assets/images/fallAl.png');
    for (let i = 1; i <= 6; i++) {

        cupImages.push(loadImage('assets/images/teacup' + i + '.png'));
    }
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

    for (let i = 0; i < cupImages.length; i++) {
        let x = random(windowWidth / 2, windowWidth - windowWidth / 2.7);
        let y = random(windowHeight + 100, windowHeight + 1000);
        let cupObject = new Cup(x, y, cupImages[i]);
        cups.push(cupObject);
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
    else if (state === "two") {
        two();
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

function mousePressed() {
    clickCount++;
    if (clickCount === 1) {
        typewriter.typewrite(`Alice in Wonderland`, windowWidth / 18, windowHeight / 2);
    }

    else if (clickCount === 2) {
        state = "one";
        typewriter.typewrite(`click to continue`, windowWidth / 18, windowHeight / 2);
    }

    else if (clickCount == 3) {
        state = "two";
    }
}

function one() {
    background(0, 0, 0);
    image(hole, windowWidth / 18, windowHeight / 120, windowWidth, windowHeight);
    typewriter.display();
    for (let i = 0; i < alices.length; i++) {

        if (alices[i].active) { //calls the functions in the apple class that drops the apples
            alices[i].follow();
            alices[i].display();
        }

    }

    for (let i = 0; i < cups.length; i++) {
        cups[i].display();
        cups[i].gravity();
        cups[i].move();
    }
}

function two() {
    background(0, 0, 0);
    for (let i = 0; i < alices.length; i++) {
        if (alices[i].active) { //calls the functions in the apple class that drops the apples
            alices[i].fall();
            alices[i].gravity(gravityForce);
            alices[i].display();
        }
    }
}

