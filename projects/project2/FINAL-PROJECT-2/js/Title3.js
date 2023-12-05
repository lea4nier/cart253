class Title3 {
    //third title screen where alice falls down the screen 
    constructor() {
        //set up alice 
        this.aliceAsset = loadImage('assets/images/fallAl.png');//preload AliceAsset image
        this.gravityForce = 0.0025;//gravity of alice when falling
        this.alices = [];   //create an array for the alice asset
        this.numAlices = 1;//only want 1 on the screen

        //set up typewriter
        this.typewriter = new Typewriter();//creates new typewriter from typewriter class
        this.typewriter.typewrite(`after such a fall as this, I shall think nothing of tumbling down stairs!`, windowWidth / 18, windowHeight / 2);//setting up where the typewriter text goes and what it says
        for (let i = 0; i < this.numAlices; i++) {
            let x = windowWidth / 2;      //alice starts falling in the center of the screen 
            let y = windowHeight / 2;
            let alice = new Alice(x, y, this.aliceAsset);
            this.alices.push(alice);
        }
    }

    // draws alice falling down screen and typewriter text 
    draw() {
        background(0, 0, 0); //sets background to black
        this.typewriter.display();//displays typewriter text

        for (let i = 0; i < this.alices.length; i++) {

            if (this.alices[i].active) { //calls the functions in the alice class that make her fall again
                this.alices[i].fall();
                this.alices[i].gravity(this.gravityForce);
                this.alices[i].display();
            }

        }
    }

    // transition to the next state when the mouse is pressed.
    mousePressed() {
        currentState = new Table();
    }
}