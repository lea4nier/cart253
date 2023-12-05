class Key {
    //Key state where magical key appears in empty bottle
    constructor() {
        //current frame of the animation for the gif
        this.currentFrame = 0;

        //variable for gif
        this.gif1;

        //attributes for gif1
        this.gif1 = createImg('assets/images/key.gif');
        this.gif1.position(windowWidth / 3 + 30, windowHeight / 2);
        this.gif1.size(100, 100);

        //hide the gif at first 
        this.gif1.hide();

        //load empty bottle image
        this.empty = loadImage('assets/images/empty.png');

        //create typewriter to display text 
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Curiouser and curiouser!
        \n Maybe I can find a way out of here...`, windowWidth - 800, windowHeight / 1.5);
    }

    //draws key gif, empty bottle, and typewriter text
    draw() {
        background(0, 0, 0); //set background to black
        this.typewriter.display(); //display typewriter text 
        image(this.empty, windowWidth / 3, windowHeight / 4, 400, 400); //display bottle image
        this.gif1.show();//display key gif 

        // cycle through the frames of the gif to create animation
        this.currentFrame = (this.currentFrame + 1) % 7;
    }

    //events on mouse pressed 
    mousePressed() {
        currentState = new Door(); // transition to the next state (Door) when the mouse is pressed
        this.gif1.hide(); //hide the key gif
    }
}
