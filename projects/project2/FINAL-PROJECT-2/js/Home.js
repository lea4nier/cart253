class Home {
    //This code was made by using code from "Spiral" by The Coding Train / Daniel Shiffman
    //Link to code: https://editor.p5js.org/codingtrain/sketches/BnJ_4U4cr
    /////////
    //Home class is the Ending state!! Alice goes into portal  
    constructor() {
        this.startTime = millis(); //set start time 
        this.duration = 5555; //time limit during game 
        this.aliceAsset = loadImage('assets/images/fallAl.png'); //load alice image 
        this.alices = [];   //create an array for Alice
        this.numAlices = 1; //number of Alice's 
        this.angle = 0;// Set initial rotation angle for circular animation
        this.angleIncrement = 0.05; // Increment for the rotation angle in each frame
        this.radiusIncrement = 1; // Increment for the radius of circles in each frame
        this.radius = 5; // Initial radius for circles
        this.circles = [];  // Create an array to store circular animation data (x, y, size)
        this.typewriter = new Typewriter(); // Create new Typewriter text 
        this.typewriter.typewrite(`the end`, windowWidth / 2.1, windowHeight / 2.15); // Display the text "the end" using the Typewriter class

        //create Alice and add to the array
        for (let i = 0; i < this.numAlices; i++) {
            let x = windowWidth / 2;      //alice starts shrinking in the center of the screen
            let y = windowHeight / 2;
            let alice = new Alice(x, y, this.aliceAsset);
            this.alices.push(alice); //add Alice to the array
        }
    }

    //draw spiral, Alice shrinking, and typewriter text 
    draw() {
        let elapsed = millis() - this.startTime; //when the state changes to Home the countdown begins 
        if (elapsed > this.duration) {
            currentState = new Title1();  //after the duration is over the state goes back to the beginning of the game!
        }

        background(0, 0, 0); //set background to black

        this.typewriter.display(); //display typewriter text saying "the end"

        //for loop for Alice
        for (let i = 0; i < this.alices.length; i++) {

            if (this.alices[i].active) { //calls the functions in the Alice class that make her display and shrink
                this.alices[i].shrink();
                this.alices[i].home();
            }
        }

        //for loop for each circle in the array
        for (let i = 0; i < this.circles.length; i++) {
            // draw a white ellipse at the specified position and size
            fill(255);
            ellipse(this.circles[i].circleX, this.circles[i].circleY, this.circles[i].size, this.circles[i].size);
            stroke(255);
        }
        // calculate the position of the next ellipse in the circular animation
        let x = width / 2 + cos(this.angle) * this.radius;
        let y = height / 2 + sin(this.angle) * this.radius;

        //create an object representing the current circle in the animation
        let circle = {
            circleX: x,
            circleY: y,
            size: 20,
        }

        // Add the current circle object to the array
        this.circles.push(circle);

        // Increment the angle and radius for the next ellipse in the animation
        this.angle += this.angleIncrement;
        this.radius += this.radiusIncrement;
    }
}