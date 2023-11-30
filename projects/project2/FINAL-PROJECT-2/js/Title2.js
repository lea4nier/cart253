class Title2 {
    constructor() {
        this.aliceAsset = loadImage('assets/images/fallAl.png');
        this.hole = loadImage('assets/images/down.png');
        this.typewriter = new Typewriter();
        this.gravityForce = 0.0025;
        this.alices = [];   //create an array for the apples
        this.numAlices = 1;
        this.typewriter.typewrite(`click to continue`, windowWidth / 18, windowHeight / 2);
        this.cupImages = [];
        this.cups = [];
        this.numCups = 6;

        for (let i = 0; i < this.numAlices; i++) {
            let x = windowWidth / 2;      //good apples fall at a random x and y
            let y = -400;
            let alice = new Alice(x, y, this.aliceAsset);
            this.alices.push(alice);
        }
        for (let i = 1; i <= 6; i++) {

            this.cupImages.push(loadImage('assets/images/teacup' + i + '.png'));
        }
        for (let i = 0; i < this.cupImages.length; i++) {
            let x = random(windowWidth / 2, windowWidth - windowWidth / 2.7);
            let y = random(windowHeight + 100, windowHeight + 1000);
            let cupObject = new Cup(x, y, this.cupImages[i]);
            this.cups.push(cupObject);
        }
    }

    // draw()
    // Called every frame in the main script. Handles what the title
    // state needs to do each frame, which is display the title.
    draw() {
        background(0, 0, 0);
        image(this.hole, windowWidth / 18, windowHeight / 120, windowWidth, windowHeight);
        this.typewriter.display();

        for (let i = 0; i < this.alices.length; i++) {

            if (this.alices[i].active) { //calls the functions in the apple class that drops the apples
                this.alices[i].follow();
                this.alices[i].display();
            }

        }

        for (let i = 0; i < this.cups.length; i++) {
            this.cups[i].display();
            this.cups[i].gravity();
            this.cups[i].move();
            this.cups[i].bounce(this.alices[0]);
        }
    }


    mousePressed() {
        currentState = new Title3();
    }
}