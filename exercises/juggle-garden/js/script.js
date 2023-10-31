/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let basket;
let basketAsset;

/**
 * Description of preload
*/
function preload() {
    basketAsset = loadImage('assets/images/catch.png');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight); 
    basket = new Basket(300, 650, basketAsset);
}


/**
 * Description of draw()
*/
function draw() {
    background(143, 232, 247); 

    basket.move();
    basket.display();
}