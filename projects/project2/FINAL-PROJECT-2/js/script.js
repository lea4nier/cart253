// A variable to store the currently active state object (starts empty)
let currentState;
let music;

// setup()
// Create the canvas, start our program in the title state, set default text style

function preload() {
    music = loadSound(`assets/sounds/theme.mp3`);

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // We can set the current state by creating a NEW object from the class
    // representing that state! This will call its constructor() which will work
    // like the `setup()` for that state.
    currentState = new Title1();



}

// draw()
// Simply call the draw method of the current state
function draw() {
    // If the current state is Title this will call the Title class draw()
    // If the current state is Animation this will call the Animation class draw()
    // if the current state is Ending this will call the Ending class draw()
    currentState.draw();

}



function mousePressed() {
    currentState.mousePressed();
    if (!music.isPlaying()) {
        music.loop();
    }
}