class Garden {
    constructor() {
        this.startTime = millis(); //set start time 
        this.duration = 10000;  //timer of 10 seconds
        this.countFlower = 0;   //counts number of flowers the user turns red 
        this.cat2 = loadImage('assets/images/cat2.png');
        this.flowers = [];  //array for flowers 
        this.numFlowers = 50;  //number of flowers displayed 
        this.butterflies = []; //array for butterflies
        this.numButterflies = 5; //number of butterflies
        this.grassColor = {  //color of grass 
            r: 0,
            g: 0,
            b: 0
        };

        createCanvas(windowWidth, windowHeight);

        for (let i = 0; i < this.numFlowers; i++) {   //for loop to set up flowers
            let x = random(0, width);  //random positioning
            let y = random(0, height);
            let size = random(50, 80);
            let stemLength = random(50, 100);
            let flower = new Flower(x, y, size, stemLength);
            this.flowers.push(flower);
        }

        for (let i = 0; i < this.numButterflies; i++) {  //for loop to set up butterflies
            let x = random(0, width);  //random positioning
            let y = random(0, height);
            let butterfly = new Butterfly(x, y);
            this.butterflies.push(butterfly);
        }
    }

    draw() {
        // let elapsed = millis() - this.startTime;  //countodwn starts 
        // if (elapsed > this.duration) {
        //     currentState = new TalkingCat();  //if 10 seconds pass the state changes to "win"
        // }
        background(this.grassColor.r, this.grassColor.g, this.grassColor.b);
        for (let i = 0; i < this.flowers.length; i++) {
            let flower = this.flowers[i];
            if (flower.alive) {
                flower.display();
                flower.pollinate();
            }
        }

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
        image(this.cat2, windowWidth / 8, windowHeight / 4, 100, 100);
    }

    mousePressed() {
        for (let i = 0; i < this.butterflies.length; i++) {
            let butterfly = this.butterflies[i];
            butterfly.mousePressed();
        }
        for (let i = 0; i < this.flowers.length; i++) {
            let flower = this.flowers[i];
            flower.mousePressed();   //calls mousePressed function in Flower class that turns flowers red 
            //     if (mouseX > flower.x && mouseX < flower.x + flower.size && mouseY > flower.y && mouseY < flower.y + flower.size) {
            //         this.countFlower = this.countFlower + 1;   //counts number of times user presses flower 
            //     }
            // }
            if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 100 && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + 100) {
                currentState = new TalkingCat(); // If the suer presses the cat2 image then they go back to the TalkingCat state
            }

        }
    }
}