/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let gravityForce = 0.0025;

let basket;
let basketAsset;

let appleAsset;

let apples = [];
let numApples = 5;

/**
 * Description of preload
*/
function preload() {
    basketAsset = loadImage('assets/images/catch.png');
    appleAsset = loadImage('assets/images/red.png');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    basket = new Basket(300, 650, basketAsset);

    for (let i = 0; i < numApples; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let apple = new Apple(x, y,appleAsset);
        apples.push(apple);
    }
}


/**
 * Description of draw()
*/
function draw() {
    background(143, 232, 247);

    basket.move();
    basket.display();

    for (let i = 0; i < apples.length; i++) {
        // let apple = apples[i];
        if (apples[i].active) {
            apples[i].gravity(gravityForce);
            apples[i].move();
            apples[i].display();
        }
    }
}

function keyPressed() {
    basket.keyPressed(keyCode);
}

function keyReleased() {
    basket.keyReleased(keyCode);
}