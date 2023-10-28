/**
 * SHARK ESCAPE!
 * Léa Fournier
 * 
 * You have 10 seconds to swim away from the sharks! Don't let the grey circles (sharks) touch you and you will be saved. 
 * If they touch you: game over!
 */

"use strict";
let startTime = undefined; 
let duration = 10000; //time limit of 10 seconds during game 

let user = {  //define user's circle 
    x: 0,
    y: 0,
    size: 50,
    trail: [] 
};

let school = [];  //create for loop
let schoolSize = 3;

let home; //give variable names to iamges for the beginning and end states 
let died;
let alive; 

let state = "title"; //game starts in title state

/**
 * preload images 
*/
function preload() {
    home = loadImage("assets/images/title.png");
    died = loadImage("assets/images/fail.png");
    alive = loadImage("assets/images/alive.png");
}

function setup() {
    createCanvas(600, 600); //set canvas 
        
    for (let i = 0; i < schoolSize; i++) {
        school[i] = createFish(random(0, width), random(0, height)); //"fish" (sharks) will be positioned randomly
    }
}

function createFish(x, y) { // Creates a new JavaScript Object describing a fish and returns it
    let fish = {
        x: x,
        y: y,
        size: 100,
        vx: 0,
        vy: 0,
        speed: 7,
        active: false
    };
    return fish;
}


function draw() {    //draw states of code
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

function title() {  //title screen is an image I drew on my ipad 
    image(home, 0, 0, 600, 600);
}

function keyPressed() { //if the user presses the space bar the state changes to game 
    if (keyCode === 32)
        state = 'game';
        startTime = millis();
}
function game() {
    let elapsed = millis() - startTime; //when the state changes to game the 10 second countdown begins 
    if (elapsed > duration) {
        state = 'win';  //if 10 seconds pass the state changes to "win"
      }
    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
        if (dist(school[i].x, school[i].y, user.x, user.y) < user.size / 2 + school[i].size / 2) { 
            state = 'fail';  //if the sharks ('fish' variable) overlaps with the user then the state changes to fail
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
    fill(255, 0, 0); //I changed fish color to red 
    ellipse(user.x, user.y, user.size);
    pop();
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
    fill(183, 188, 189); //I changed the shark color to be grey 
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}

function fail() {
    image(died, 0, 0, 600, 600);  //image appears for fail ending 
}

function win() {
    image(alive, 0, 0, 600, 600); //image appears for win ending 
}