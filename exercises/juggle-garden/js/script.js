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

let appleAsset;

let apples = [];
let numApples = 1;


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
    basket = new Basket(255, 650, basketAsset);

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
        
        if (apples[i].active) {
            apples[i].gravity(gravityForce);
            apples[i].move();
            catchApple(apples[i]);
            apples[i].display();
        }
    }

    text(countApple, windowWidth/2, windowHeight/2);
    fill(255);
    textSize(80);
    textAlign(TOP,CENTER);
}

function keyPressed() {
    basket.keyPressed(keyCode);
}

function keyReleased() {
    basket.keyReleased(keyCode);
}

function catchApple(apple){
    //console.log(apple.x, apple.y, basket.size, basket.x, basket.y, apple.size);
    if (apple.y + apple.size/2 > basket.y &&
    apple.x < basket.x + basket.size/2 && 
    apple.x > basket.x - basket.size/2){
        countApple = countApple + 1; 
        apple.x = random(0, width);
        apple.y = random(-400, -100);
    }

    else if (apple.y >= height){
        apple.x = random(0, width);
        apple.y = random(-400, -100);
    }

}