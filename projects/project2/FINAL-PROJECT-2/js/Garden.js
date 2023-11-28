class Garden {
    constructor() {
        this.cat2 = loadImage('assets/images/cat2.png');
        this.flowers = [];
        this.numFlowers = 50;
        this.butterflies = [];
        this.numButterflies = 5;
        this.grassColor = {
            r: 0,
            g: 0,
            b: 0
        };

        createCanvas(windowWidth, windowHeight);

        for (let i = 0; i < this.numFlowers; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let size = random(50, 80);
            let stemLength = random(50, 100);
            let flower = new Flower(x, y, size, stemLength);
            this.flowers.push(flower);
        }

        for (let i = 0; i < this.numButterflies; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let butterfly = new Butterfly(x, y);
            this.butterflies.push(butterfly);
        }
    }

    draw() {
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
        for (let i = 0; i < this.flowers.length; i++) {
            let flower = this.flowers[i];
            flower.mousePressed();
        }
        if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 100 && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + 100) {
            currentState = new TalkingCat(); // Handle the mouse press action for cat2
        }

    }
}