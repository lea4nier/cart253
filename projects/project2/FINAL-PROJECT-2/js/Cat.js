class Cat {
    constructor() {
        this.catimage = loadImage('assets/images/cat1.png');  //main cheshire cat image
        this.size = 50; // beginning size of other images
        this.catSize = 50; //beginning size of cat
        this.growthRate = 0.5; // growth rate for images
        this.strobeCat = true; //boolean value for cat to strobe
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Would you tell me, please, which way I out to go from here? 
        \n ...That depends a great deal on where you want to get to
        \n I don't much care where - 
        \n ...Then it doesn't matter which way you go`, windowWidth - 700, windowHeight / 3);
    }

    draw() {
        background(0, 0, 0);
        this.typewriter.display();

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

        if (this.catSize === 500) {  //once cat is 500px the state switches to talking
            currentState = new TalkingCat();
        }
    }
}