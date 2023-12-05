class Title1 {
    // This is the very first state of the program 
    constructor() {
        this.aliceAsset = loadImage('assets/images/fallAl.png'); //preload AliceAsset image
        this.hole = loadImage('assets/images/down.png'); //preload rabbit hole image
        this.typewriter = new Typewriter(); //creates new typewriter from typewriter class 
        this.gravityForce = 0.0025; //gravity of alice when falling
        this.alices = [];   //create an array for the alice asset
        this.numAlices = 1; //only want 1 falling
        this.typewriter.typewrite(`Alice in Wonderland`, windowWidth / 18, windowHeight / 2); //setting up where the typewriter text goes and what it says

        for (let i = 0; i < this.numAlices; i++) { //for loop for alice falling
            let x = windowWidth / 2;      //alice falls in the center of the screen
            let y = -200;   //alice starts falling from above the screen
            let alice = new Alice(x, y, this.aliceAsset);  //create new alice
            this.alices.push(alice); //add alice object to array
        }
    }

    //draw alice falling, rabbit hole, and typewriter text 
    draw() {
        background(0, 0, 0); //black background to follow theme of my game
        image(this.hole, windowWidth / 18, windowHeight / 120, windowWidth, windowHeight); //draw rabbit hole image

        for (let i = 0; i < this.alices.length; i++) {  //for loop for alice falling

            if (this.alices[i].active) { //calls the functions in the alice class that makes her fall
                this.alices[i].gravity(this.gravityForce);
                this.alices[i].move();
                this.alices[i].display();
            }

        }
        this.typewriter.display(); //display typewriter text 
    }


    mousePressed() {
        currentState = new Title2(); //when the user presses mouse it moves to the next state
    }
}