/**
 * Juggle Garden Exercise
 * Léa Fournier
 * 
 * Use your left and right arrow keys to catch the apples! If you can catch 13 red apples, you win! 
 * But beware of the bad apples, if you catch one, game over!
 */

"use strict";
let countApple = 0;
let gravityForce = 0.0025;

let basket;
let basketAsset;

let badAsset;

let numBads = 1;    //the same bad apple is drawn over and over again

let appleAsset;
let apples = [];   //create an array for the apples
let numApples = 1;   //the same good apple is drawn over and over again

let home;
let sorry;
let yay;

let state = "title"; //game starts in title state

/**
 * preload images
*/
function preload() {
    basketAsset = loadImage('assets/images/catch.png');
    appleAsset = loadImage('assets/images/red.png');
    badAsset = loadImage('assets/images/evil.png');
    home = loadImage('assets/images/home.png');
    sorry = loadImage('assets/images/sorry.png');
    yay = loadImage('assets/images/yay.png');
}


/**
 * setup canvas, basket, and apples
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    basket = new Basket(255, 650, basketAsset);   //place basket on canvas

    for (let i = 0; i < numApples; i++) {
        let x = random(0, width);      //good apples fall at a random x and y
        let y = random(-400, -100);
        let apple = new Apple(x, y, false, appleAsset);
        apples.push(apple);
    }

    for (let i = 0; i < numBads; i++) {
        let x = random(0, width);          //bad apples fall at a random x and y
        let y = random(-400, -100);
        let bad = new Apple(x, y, true, badAsset);
        apples.push(bad);
    }
}


/**
 * draw states of the program 
*/
function draw() {
    background(143, 232, 247);
    if (state === "title") {
        title();
    }
    else if (state === "game") {
        game();
        basket.move();
        basket.display();
    }
    else if (state === "fail") {
        fail();
    }
    else if (state === "win") {
        win();
    }
}

function keyPressed() {
    if (keyCode === 32)       //if the user presses the space bar the state changes to game 
        state = 'game';
    else {
        basket.keyPressed(keyCode);   //basket is controlled by left and right arrow keys
    }
}

function game() {
    for (let i = 0; i < apples.length; i++) {

        if (apples[i].active) { //calls the functions in the apple class that drops the apples
            apples[i].gravity(gravityForce);
            apples[i].move();
            catchApple(apples[i]);
            apples[i].display();
        }
    }

    text(countApple, windowWidth / 2, windowHeight / 2);   //text displays number of good apples caught in the basket
    fill(255);
    textSize(80);
    textAlign(TOP, CENTER);
}

function keyReleased() {
    basket.keyReleased(keyCode);
}

function catchApple(apple) {
    if (apple.y + apple.size / 2 > basket.y &&   //if the red apples touch the basket, the apple count goes up by 1 
        apple.x < basket.x + basket.size / 2 &&
        apple.x > basket.x - basket.size / 2) {
        if (apple.isBad) {
            // Switch to Bad Apple State
            state = `fail`;
        }
        else {
            countApple = countApple + 1;
            if (countApple === 13) {   //Switches to winning state if user catches 13 apples
                state = 'win';
            }
            apple.x = random(0, width);          //if a red apple falls into the basket, a new apple is dropped 
            apple.y = random(-400, -100);
        }

    }

    else if (apple.y >= height) {           //if the apple falls outside the basket, a new apple is dropped
        apple.x = random(0, width);
        apple.y = random(-400, -100);
        state = 'game';
    }
}

function title() {    //displays title screen image
    image(home, 0, 0, windowWidth, windowHeight);
}

function fail() {    //displays fail screen image
    image(sorry, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
}

function win() {    //displays winning screen image
    image(yay, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
}