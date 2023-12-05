class Garden {
    //Please see more detailed attributions in README File!
    //Garden class where user clicks on flowers to turn red...and secret game appears!!
    constructor() {
        //constructor for properties of garden 
        this.countFlower = 0;   //counts number of flowers the user turns red 
        this.cat2 = loadImage('assets/images/cat2.png'); //cat image 
        this.flowers = [];  //array for flowers 
        this.numFlowers = 50;  //number of flowers displayed 
        this.butterflies = []; //array for butterflies
        this.numButterflies = 5; //number of butterflies
        this.grassColor = {  //color of grass 
            r: 0,
            g: 0,
            b: 0
        };
        this.mouseAsset = loadImage('assets/images/mouse.png'); //mouse image 
        this.mouse = new Mouse(windowWidth / 10, windowHeight / 2, this.mouseAsset); //create mouse object with initial position 
        this.mouseMoving = false; //begins not moving in setup 

        // Loop to set up flowers 
        for (let i = 0; i < this.numFlowers; i++) {
            let x = random(0, width);  //random positioning
            let y = random(0, height);
            let size = random(50, 80); //random size and stem length for each flower 
            let stemLength = random(50, 100);
            let flower = new Flower(x, y, size, stemLength); //create a new flower object and push it to array
            this.flowers.push(flower);
        }

        // Loop to set up butterflies
        for (let i = 0; i < this.numButterflies; i++) {
            let x = random(0, width);  //random positioning
            let y = random(0, height);
            let butterfly = new Butterfly(x, y); //create a new butterfly object and push it to array
            this.butterflies.push(butterfly);
        }
    }

    //draw garden and update with butterflies, flowers, cat, and mouse for secret game 
    draw() {
        background(this.grassColor.r, this.grassColor.g, this.grassColor.b); //set background to grass color

        // Loop through flowers and display/pollinate if they are alive
        for (let i = 0; i < this.flowers.length; i++) {
            let flower = this.flowers[i];
            if (flower.alive) {
                flower.display();
                flower.pollinate();
            }
        }

        // Loop through butterflies, move, attempt to pollinate, and display if they are alive
        for (let i = 0; i < this.butterflies.length; i++) {
            let butterfly = this.butterflies[i];
            if (butterfly.alive) {
                butterfly.move();

                for (let j = 0; j < this.flowers.length; j++) {
                    let flower = this.flowers[j];
                    butterfly.tryToPollinate(flower);
                }

                butterfly.display();
            }
        }

        //dispaly cat2 image
        image(this.cat2, windowWidth / 8, windowHeight / 4, 150, 150);

        //if the mouse is moving, display the mouse 
        if (this.mouseMoving) {
            this.mouse.display();
            this.mouse.move();
        }
    }

    //when the mouse is pressed the flowers change to red 
    //and computer counts the amount of flowers pressed to cue mouse!
    mousePressed() {
        // Loop through butterflies and handle mouse press for each
        for (let i = 0; i < this.butterflies.length; i++) {
            let butterfly = this.butterflies[i];
            butterfly.mousePressed(); //if the mouse is pressed, the flower color changes 
        }

        // Loop through flowers and handle mouse press for each
        for (let i = 0; i < this.flowers.length; i++) {
            let flower = this.flowers[i];
            flower.mousePressed();   //calls mousePressed function in Flower class that turns flowers red 
            if (flower.mousePressed) {
                this.countFlower = this.countFlower + 1;   //counts number of times user presses flower 
            }

        }
        //if the count of red flowers is greater than or equal to 100, then the mouse moves onto the screen 
        if (this.countFlower >= 100) {
            this.mouseMoving = true;
        }

        //if the user presses the mouse image then they access secret game in MouseTitle state 
        if (
            mouseX > this.mouse.x &&
            mouseX < this.mouse.x + 300 &&
            mouseY > this.mouse.y &&
            mouseY < this.mouse.y + 300
        ) {
            currentState = new MouseTitle();  // Change the state to MouseTitle
        }

        // If the user presses the cat2 image then they go back to the TalkingCat state
        if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 150 && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + 150) {
            currentState = new TalkingCat();
        }

    }

}