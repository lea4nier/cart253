/**
 * Make Some Noise
 * Léa Fournier
 * 
 * You are Alice from Alice in Wonderland and have just found a mysterious bottle! 
 * Speak "drink me" to see what happens!
 */

"use strict";

let frames = [];
let currentFrame = 0;

let doorY = 0;

let gif1;
let gif2;

let fr = 1;
let drinkme;
let empty;
let table;
let shoes;
let door;
let key;

let state = "door";

let mySpeechRec = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
mySpeechRec.onResult = showResult; // bind callback function to trcwhen speech is recognized
mySpeechRec.continuous = true
mySpeechRec.interimResults = true
mySpeechRec.start(); // start listening

/**
 * Load full bottle image and array of bottle for animation
*/
function preload() {
    drinkme = loadImage('assets/images/drinkme.png');
    table = loadImage('assets/images/table.png')
    empty = loadImage('assets/images/empty.png');
    shoes = loadImage('assets/images/shoe.png');
    door = loadImage('assets/images/door1.png');
    key = loadImage('assets/images/key.png');

    for (let i = 1; i <= 9; i++) {
        let frame = loadImage('assets/images/bottle' + i + '.png'); //I have 9 different pictures
        frames.push(frame);
    }
}


/**
 * setup canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    gif1 = createImg('assets/images/key.gif');
    gif1.position(windowWidth / 3 + 30, windowHeight / 2);
    gif1.size(100, 100);
    gif1.hide();



    gif2 = createImg('assets/images/door.gif');
    gif2.position(windowWidth / 8, doorY);
    gif2.size(400, 400);
    gif2.hide();
}

function showResult() {
    console.log(mySpeechRec.resultString); // log what the user says into mic
}



/**
 * different states
*/
function draw() {
    background(0, 0, 0);
    if (state === "table") {
        desk();
    }
    else if (state === "zoom") {
        closer();
    }
    else if (state === "bottle") {
        bottle();
    }
    else if (state === "drink") {
        drink();
    }
    else if (state === "prize") {
        sparkle();
    }
    else if (state === "door") {
        unlock();
    }
    else if (state === "opening") {
        open();
    }
}

function mousePressed() {
    if (state === "table")
        state = "zoom";
    else if (state === "zoom")
        state = "bottle";
    else if (state === "prize")
        state = "door";
}

function desk() {
    image(table, windowWidth / 3, windowHeight / 4, 400, 400);
    image(drinkme, windowWidth / 2, windowHeight / 5, 100, 100);
}

function closer() {
    image(table, windowWidth / 6.5, windowHeight / 4, 900, 900);
    image(drinkme, windowWidth / 2, windowHeight / 15, 300, 300);
}

function bottle() {
    image(drinkme, windowWidth / 3, windowHeight / 4, 400, 400);
    text('say: "drink me"', windowWidth / 3, windowHeight / 8);
    fill(221, 88, 245);
    textSize(60);

    let lowerStr = "";
    if (mySpeechRec.resultString) {
        lowerStr = mySpeechRec.resultString.toLowerCase();    //turn what user says into lowercase 
    }

    let mostRecentWord = lowerStr.split(" ").pop();  //if user says drink me then the state switches to drink
    if (lowerStr.includes("drink me")) {
        state = "drink";
    }
}

function drink() {
    frameRate(fr);
    image(frames[currentFrame], windowWidth / 3, windowHeight / 4, 400, 400);  //displays the images in the array
    // Advance to the next frame (and loop back to 0 if you reach the end)

    currentFrame = (currentFrame + 1);

    if (currentFrame === 8) {
        state = "prize";
    }
}

function sparkle() {
    gif1.show();
    image(empty, windowWidth / 3, windowHeight / 4, 400, 400);
    currentFrame = (currentFrame + 1) % 7;
}

function unlock() {
    doorY = height - 400;
    image(door, windowWidth / 8, doorY, 400, 400);

    image(shoes, 0, 0, windowWidth, windowHeight);

    let centerX = mouseX - 50;
    let centerY = mouseY - 50;

    image(key, centerX, centerY, 100, 100);

    if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 400 && mouseY > doorY && mouseY < doorY + 400) {
        if (mouseIsPressed) {
            state = "opening";
        }
    }
}

function open() {
    image(shoes, 0, 0, windowWidth, windowHeight);

    doorY = height - 400;
    gif2.position(windowWidth / 8, doorY);
    gif2.show();
}