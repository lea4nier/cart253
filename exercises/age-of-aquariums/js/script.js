/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let user = {
    x: 0,
    y: 0,
    size: 50,
    trail: [] // Note that we are creating an EMPTY TRAIL ARRAY as a PROPERTY of the circle
};

let school = [];
let schoolSize = 2;
let home;
let died;
 
let moveDistance = 0;
let fishThreshold = 1000;

let state = "title";

/**
 * Description of preload
*/

function preload() {
    home = loadImage("assets/images/title.png");
    died = loadImage("assets/images/fail.png");
}

function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < schoolSize; i++) {
        school[i] = createFish(random(0, width), random(0, height));
    }
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
    let fish = {
        x: x,
        y: y,
        size: 100,
        vx: 0,
        vy: 0,
        speed: 2,
        active: false
    };
    return fish;
}

// draw()
// Moves and displays our fish
function draw() {
    background(99, 182, 255);
    if (state === "title") {
        title();
    }
    else if (state === "game") {
        game();
    }
    else if (state === "fail") {
        fail();
    }
    else if (state === "win") {
        win();
    }
}

function title() {
    image(home, 0, 0, 600, 600);
}

function keyPressed() {
    if (keyCode === 32)
        state = 'game';
}
function game() {

    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
        if (dist(school[i].x, school[i].y, user.x, user.y) < user.size / 2 + school[i].size / 2) {
            state = 'fail';
        }
    }
    for (let i = 0; i < user.trail.length; i++) {
        // Get the element at the index indicated by i (0, then 1, then 2, etc.)
        let element = user.trail[i];
        // Draw an ellipse the same size as the circle at that position
        ellipse(element.x, element.y, user.size);
    }

    // Move the circle to the mouse position
    user.x = mouseX;
    user.y = mouseY;

    // Draw the circle
    push();
    fill(255, 0, 0);
    ellipse(user.x, user.y, user.size);
    pop();
    for (let fish of school) {
        //if (fish.active) {
        //ellipse(fish.x, fish.y, fish.size);

    }
}


// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }

    // Move the fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;

    // Constrain the fish to the canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
    push();
    fill(183, 188, 189);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}

function fail() {
    image(died, 0, 0, 600, 600);
}