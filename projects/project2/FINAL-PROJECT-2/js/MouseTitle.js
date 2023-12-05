class MouseTitle {
    //MouseTitle class when user discovers secret game!
    constructor() {
        //create new typewriter object and preload text and position
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Congrats! You have discovered a secret game...
        \nYou have 10 seconds to try and catch the mouse!
        \n click to start`, windowWidth / 18, windowHeight / 2);

        //load mouse image
        this.mouseAsset = loadImage('assets/images/mouse.png');

        //create mouse object with beginning position
        this.mouse = new Mouse(windowWidth / 10, windowHeight / 2, this.mouseAsset);
    }

    //draws mouse moving from left to right of screen and typewriter text 
    draw() {
        background(0, 0, 0); //set background color to black 
        this.typewriter.display(); //display typewriter text 

        //calls functions from mouse class 
        this.mouse.display(); //mouse is drawn and displays the mouse image
        this.mouse.move(); //mouse moves from left to right of screen 
    }

    //if the user presses the mouse then the game begins
    mousePressed() {
        currentState = new MouseGame(); //switches to MouseGame state 
    }

}