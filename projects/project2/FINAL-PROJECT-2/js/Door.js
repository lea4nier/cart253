class Door {
    constructor() {
        this.doorY = height - 400;
        this.fr = 60;   //bringing back faster frame rate 

        this.door = loadImage('assets/images/door1.png');
        this.shoes = loadImage('assets/images/shoe.png');
        this.key = loadImage('assets/images/key.png');
    }

    draw() {
        background(0, 0, 0);
        frameRate(this.fr);
        this.doorY = height - 400;
        image(this.door, windowWidth / 8, this.doorY, 400, 400);   //image of door 

        image(this.shoes, 0, 0, windowWidth, windowHeight);   //shoe image 

        let centerX = mouseX - 50;     //key image follows user's mouse 
        let centerY = mouseY - 50;
        image(this.key, centerX, centerY, 100, 100);

        if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 400 && mouseY > this.doorY && mouseY < this.doorY + 400) {
            if (mouseIsPressed) {
                currentState = new Open;   //if the mouse is pressed over the door image it moves to the next state where the door animation is played
            }
        }
        this.stopListening(); // Call the stopListening method when transitioning to the next state
    }


    stopListening() {        //user's microphone turns off 
        if (this.listening) {
            this.mySpeechRec.stop();
            this.listening = false;
        }
    }
}