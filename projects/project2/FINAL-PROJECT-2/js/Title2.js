class Title2 {
    //second title screen where alice follows user's mouse and teacups bounce off her
    constructor() {
        //set up alice 
        this.aliceAsset = loadImage('assets/images/fallAl.png');//preload AliceAsset image
        this.hole = loadImage('assets/images/down.png');//preload rabbit hole image
        this.gravityForce = 0.0025;//gravity of alice when falling
        this.alices = [];   //create an array for the alice asset
        this.numAlices = 1;//only want 1 on the screen

        //set up typewriter
        this.typewriter = new Typewriter();//creates new typewriter from typewriter class
        this.typewriter.typewrite(`click to continue`, windowWidth / 18, windowHeight / 2);//setting up where the typewriter text goes and what it says

        //set up teacups 
        this.cupImages = [];
        this.cups = [];
        this.numCups = 6;  //6 cups total

        //for loop for alice image
        for (let i = 0; i < this.numAlices; i++) {
            let x = windowWidth / 2;
            let y = -400;
            let alice = new Alice(x, y, this.aliceAsset);
            this.alices.push(alice);
        }

        //for loop for cup images 
        for (let i = 1; i <= 6; i++) {
            this.cupImages.push(loadImage('assets/images/teacup' + i + '.png'));
        }

        //for loop to create teacup objects 
        for (let i = 0; i < this.cupImages.length; i++) {
            let x = random(windowWidth / 2, windowWidth - windowWidth / 2.7); //random x for each teacup
            let y = random(windowHeight + 100, windowHeight + 1000);   //teacups start below the screen 
            let cupObject = new Cup(x, y, this.cupImages[i]);
            this.cups.push(cupObject);
        }
    }

    //draw rabbit hole, alice, teacups, and typewriter text, and background
    draw() {
        background(0, 0, 0); //sets background to black
        image(this.hole, windowWidth / 18, windowHeight / 120, windowWidth, windowHeight); //rabbit hole image stays in the same place as the last state
        this.typewriter.display(); //displays typewriter text 

        // display and update Alice objects
        for (let i = 0; i < this.alices.length; i++) {

            if (this.alices[i].active) { //calls the functions in the alice class that make her follow user's mouse
                this.alices[i].follow();
                this.alices[i].display();
            }

        }

        // display and update teacup objects
        for (let i = 0; i < this.cups.length; i++) {  //teacups rise to create falling illusion and bounce off of Alice
            this.cups[i].display();
            this.cups[i].gravity();
            this.cups[i].move();
            this.cups[i].bounce(this.alices[0]);
        }
    }

    // transition to the next state when the mouse is pressed.
    mousePressed() {
        currentState = new Title3();
    }
}