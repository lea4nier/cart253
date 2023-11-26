class Title1 {

    // constructor()
    // Acts as the setup() of the state, called when the
    // state is created. Sets the title of the program.
    constructor() {
        this.aliceAsset = loadImage('assets/images/fallAl.png');
        this.typewriter = new Typewriter();
        this.gravityForce = 0.0025;
        this.alices = [];   //create an array for the apples
        this.numAlices = 1;
        this.typewriter.typewrite(`Alice in Wonderland`, windowWidth / 18, windowHeight / 2);

        for (let i = 0; i < this.numAlices; i++) {
            let x = windowWidth / 2;      //good apples fall at a random x and y
            let y = -400;
            let alice = new Alice(x, y, this.aliceAsset);
            this.alices.push(alice);
        }
    }

    // draw()
    // Called every frame in the main script. Handles what the title
    // state needs to do each frame, which is display the title.
    draw() {
        background(0, 0, 0);
        image(hole, windowWidth / 18, windowHeight / 120, windowWidth, windowHeight);
        this.typewriter.display();

        for (let i = 0; i < this.alices.length; i++) {

            if (this.alices[i].active) { //calls the functions in the apple class that drops the apples
                this.alices[i].gravity(this.gravityForce);
                this.alices[i].move();
                this.alices[i].display();
            }

        }
    }


    mousePressed() {
        currentState = new Title2();
    }
}