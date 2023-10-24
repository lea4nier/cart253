/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let fish;
let shark;
let home;


let state = "title"
/**
 * Description of preload
*/
function preload() {
home = loadImage("assets/images/title.png");
fish = loadImage("assets/images/fish.png");
shark = loadImage("assets/images/shark.png");
}


/**
 * Description of setup
*/
function setup() {
createCanvas(600,600);
}


/**
 * Description of draw()
*/
function draw() {
    background(2, 170, 247);
    if (state === "title") {
        title();
    }
    else if (state === "game") {
        game();
    }
}

function title(){
    image(home, 0, 0, 600, 600);
}

function keyPressed() {
    if (keyCode === 32)
    state = 'game'; 
}
