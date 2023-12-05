/*****************************
Alice in Wonderland
Léa Fournier

Project 2
Fall 2023 

Explore Wonderland as Alice!

Please see more detailed attributions in README File
*****************************************************/

let currentState; // a variable to store the currently active state object 
let music; //variable for sound that plays throughout the entire game

function preload() {
    //full credits for song in ReadMe 
    music = loadSound(`assets/sounds/song.mp3`); //preloads song that plays the entire game

}

function setup() {
    createCanvas(windowWidth, windowHeight); // set canvas to windowWidth and windowHeight
    currentState = new Title1();  //calls opening screen of the game which is the Title1 class 
}


//calls draw method of the current state
function draw() {
    // If the current state is Title1 this will call the Title1 class draw()
    currentState.draw();

}



function mousePressed() {
    currentState.mousePressed();  //calls the mousePressed function in the current state
    if (!music.isPlaying()) {  //once the user presses there mouse, the music begins
        music.loop(); //the music loops throughout the entire game
    }
}