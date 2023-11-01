/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let countApple = 0;
let gravityForce = 0.0025;

let basket;
let basketAsset;

let badAsset;
// let bads = [];
let numBads = 1;

let appleAsset;
let apples = [];
let numApples = 1;


/**
 * Description of preload
*/
function preload() {
    basketAsset = loadImage('assets/images/catch.png');
    appleAsset = loadImage('assets/images/red.png');
    badAsset = loadImage('assets/images/evil.png');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    basket = new Basket(255, 650, basketAsset);

    for (let i = 0; i < numApples; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let apple = new Apple(x, y, false, appleAsset);
        apples.push(apple);
    }

    for (let i = 0; i < numBads; i++) {
        let x = random(0, width);
        let y = random(-400, -100);
        let bad = new Apple(x, y, true, badAsset);
        apples.push(bad);
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

        if (apples[i].active) { //red apples are dropped 
            apples[i].gravity(gravityForce);
            apples[i].move();
            catchApple(apples[i]);
            apples[i].display();
        }
    }


    // for (let i = 0; i < bads.length; i++) {

    //     if (bads[i].active) {     //bad apples are dropped 
    //         bads[i].gravity(gravityForce);
    //         bads[i].move();
    //         bads[i].display();
    //     }


    // }

    text(countApple, windowWidth / 2, windowHeight / 2);
    fill(255);
    textSize(80);
    textAlign(TOP, CENTER);
}

function keyPressed() {
    basket.keyPressed(keyCode);
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
            // state = `lose`;
            console.log(`Oh no! Caught a bad apple!`);
        }
        else {
            countApple = countApple + 1;
            if (countApple === 13) {
                // Win!
            }
            apple.x = random(0, width);          //if a red apple falls into the basket, a new apple is dropped 
            apple.y = random(-400, -100);
        }

    }

    else if (apple.y >= height) {           //if the apple falls outside the basket, a new apple is dropped
        apple.x = random(0, width);
        apple.y = random(-400, -100);
    }

    // if (countApple == 2){
    //     bads[i].active = true;
    //     apple.x = random(0, width);         
    //     apple.y = random(-400, -100);
    //     countApple = countApple + 1; 
    //     bad.x = random(0, width);          
    //     bad.y = random(-400, -100);
    //}


}