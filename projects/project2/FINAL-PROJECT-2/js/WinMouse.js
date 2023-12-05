class WinMouse {
    //WinMouse class for state when player wins by ctaching mouse
    constructor() {
        //load the cat image
        this.cat2 = loadImage('assets/images/cat3.png');

        //create a new typewriter
        this.typewriter = new Typewriter();

        //display message and assign location
        this.typewriter.typewrite(`Lucky girl! You caught the mouse!`, windowWidth / 18, windowHeight / 2);
    }

    //draws winning message and cheshire cat 
    draw() {
        background(0, 0, 0); //set background color to black 
        this.typewriter.display(); //display typewriter text 
        image(this.cat2, windowWidth / 2, windowHeight / 4, 300, 300); //display cat image 

        // Check if the mouse is over the cat image to change cursor style so user knows it is clickable
        if (mouseX > windowWidth / 2 && mouseX < windowWidth / 2 + 300 && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + 300) {
            cursor(HAND);
        }
        else {
            cursor(ARROW);
        }
    }

    //If the user presses the cat2 image then they go back to the TalkingCat state
    mousePressed() {
        //checks if mouse clicks the cat image 
        if (mouseX > windowWidth / 2 && mouseX < windowWidth / 2 + 300 && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + 300) {
            currentState = new TalkingCat(); // goes back to TalkingCat state 
            cursor(HAND);
        }
    }
}