class Door {
    //Door state with door, user controlling key, and Alice's shoes       
    constructor() {
        //y coordinate of door image
        this.doorY = height - 400;

        //bringing back faster frame rate 
        this.fr = 60;

        //load images 
        this.door = loadImage('assets/images/door1.png'); //door image
        this.shoes = loadImage('assets/images/shoe.png'); //Alice's shoes image
        this.key = loadImage('assets/images/key.png'); //key image
    }

    //draw images and key that follows user's mouse
    draw() {
        background(0, 0, 0); //set background to black
        frameRate(this.fr); //bring back normal frame rate 

        image(this.door, windowWidth / 8, this.doorY, 400, 400);   //image of door 

        image(this.shoes, 0, 0, windowWidth, windowHeight);   //shoe image 

        let centerX = mouseX - 50;     //key image follows user's mouse 
        let centerY = mouseY - 50;
        image(this.key, centerX, centerY, 100, 100); //display key 

        //if the mouse is pressed over the door image it moves to the next state where the door animation is played
        if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 400 && mouseY > this.doorY && mouseY < this.doorY + 400) {
            if (mouseIsPressed) {
                currentState = new Open; //next state 
            }
        }
    }
}