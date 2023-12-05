class MouseGame {
    //MouseGame class for game state of secret game where user has 10 
    //seconds to catch the mouse with the teacup
    constructor() {
        // Set the start time of the game and the duration (10 seconds)
        this.startTime = millis();
        this.duration = 10000; //time limit of 10 seconds during game 

        // Load mouse and user images
        this.mouseAsset = loadImage('assets/images/mouse.png'); //mouse image
        this.user = loadImage('assets/images/catch.png');//teacup image 

        // Create a Mouse object with a random initial position
        this.mouse = new Mouse(random(windowWidth / 10, windowWidth / 2), random(windowHeight / 10, windowHeight / 2), this.mouseAsset);
    }

    //draw function to show mouse moving and teacup
    //draw function starts timer 
    draw() {
        background(0, 0, 0); //set background to black 
        let elapsed = millis() - this.startTime; //when the state changes to game the 10 second countdown begins 
        if (elapsed > this.duration) {
            currentState = new TalkingCat();  //if 10 seconds pass the state changes back to the talkingCat...so they lose
        }

        // Display and update the mouse's position and movement
        //by calling display and game function from mouse class 
        this.mouse.display();
        this.mouse.game();

        // center the teacup image to the user's mouse based on the teacup image size 
        let userX = mouseX - 75;
        let userY = mouseY - 75;

        //display the teacup image to follow user's mouse
        image(this.user, userX, userY, 150, 150);

        //if the user's teacup overlaps with the mouse image the state changes to win 
        if (
            userX < this.mouse.x + 100 &&
            userX + 150 > this.mouse.x &&
            userY < this.mouse.y + 100 &&
            userY + 150 > this.mouse.y
        ) {
            currentState = new WinMouse();  // Change the state to Win
        }
    }
}