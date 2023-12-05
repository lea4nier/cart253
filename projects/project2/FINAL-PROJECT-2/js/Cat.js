class Cat {
    //Cat class where Cat grows and strobes with text from book
    constructor() {
        this.catimage = loadImage('assets/images/cat1.png');  //main cheshire cat image
        this.size = 50; // beginning size of other images
        this.catSize = 50; //beginning size of cat
        this.growthRate = 0.45; // growth rate for images
        this.strobeCat = true; //boolean value for cat to strobe

        // create a Typewriter object and display text
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Alice: "Would you tell me, please, which way I ought to go from here?" 
        \n Cheshire: "...That depends a great deal on where you want to get to"
        \n Alice: "I don't much care where" 
        \n Cheshire: "...Then it doesn't matter which way you go"`, windowWidth - 775, windowHeight / 3); //text is on the right side of the screen

    }

    //draws cat strobing/growing and typewriter text 
    draw() {
        background(0, 0, 0); //draw black background
        this.typewriter.display(); //display typewriter text 

        // Increases the cat size
        this.catSize += this.growthRate;

        // Check if the size of the cat exceeds the limit
        if (this.catSize > 500) {
            this.catSize = 500; // Set size to the limit
        }

        if (this.strobeCat) {
            // cat appears at growing size 
            image(this.catimage, windowWidth / 3, windowHeight / 4, this.catSize, this.catSize);
        }

        this.strobeCat = !this.strobeCat; //image of cat dissapears and reappears to give strobe effect

        //transitions to TalkingCat state 
        if (this.catSize === 500) {  //once the cat image is 500px the state switches to talkingCat
            currentState = new TalkingCat();
        }
    }
}