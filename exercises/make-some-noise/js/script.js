/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
// let mic;
// let volume = 0.1;

let frames = [];
let currentFrame = 0;

let fr = 1;
let drinkme;

let state = "bottle"

let mySpeechRec = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
mySpeechRec.onResult = showResult; // bind callback function to trcwhen speech is recognized
mySpeechRec.continuous = true
mySpeechRec.interimResults = true
mySpeechRec.start(); // start listening

/**
 * Description of preload
*/
function preload() {
    drinkme = loadImage('assets/images/drinkme.png');

    for (let i = 1; i <= 9; i++) {
        let frame = loadImage('assets/images/bottle' + i + '.png');
        frames.push(frame);
    }
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    // Create our AudioIn object
    // mic = new p5.AudioIn();
    // // Try to connect to the user's microphone
    // mic.start();
}

function showResult() {
    console.log(mySpeechRec.resultString); // log the result
}



/**
 * Description of draw()
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
    // let level = mic.getLevel();
    // console.log(level);
    // // Check if the ghost gets scared
    // if (level > volume) {
    //     state = "drink";
    // }

    let lowerStr = "";
    if (mySpeechRec.resultString) {
        lowerStr = mySpeechRec.resultString.toLowerCase();
    }

    let mostRecentWord = lowerStr.split(" ").pop();
    if (lowerStr.includes("drink me")) {
        state = "drink";
    }
}

function drink() {
    frameRate(fr);
    image(frames[currentFrame], windowWidth / 3, windowHeight / 4, 400, 400);
    // Advance to the next frame (and loop back to 0 if you reach the end)
    currentFrame = (currentFrame + 1);
}