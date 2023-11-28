class Cat {
    constructor() {
        this.catimage = loadImage('assets/images/cat1.png');  //main cheshire cat image
        this.size = 50; // beginning size of other images
        this.catSize = 50; //beginning size of cat
        this.growthRate = 0.5; // growth rate for images
        this.strobeCat = true; //boolean value for cat to strobe
    }

    draw() {
        background(0, 0, 0);

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
            state = "talking";
        }
    }
}