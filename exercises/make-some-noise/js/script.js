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

let fr = 1;
let drinkme;

let state = "bottle"        ``

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
}

function showResult() {
    console.log(mySpeechRec.resultString); // log what the user says into mic
}



/**
 * different states
*/
function draw() {
    background(0, 0, 0);
    if (state === "bottle") {
        bottle();
    }
    else if (state === "drink") {
        drink();
    }
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
}