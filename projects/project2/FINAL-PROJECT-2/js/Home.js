class Home {
    constructor() {
        this.aliceAsset = loadImage('assets/images/fallAl.png');
        this.alices = [];   //create an array for the apples
        this.numAlices = 1;
        this.angle = 0;
        this.angleIncrement = 0.05;
        this.radiusIncrement = 1;
        this.radius = 5;
        background(0, 0, 0);
        this.circles = [];
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`the end`, windowWidth / 2.1, windowHeight / 2.2);

        for (let i = 0; i < this.numAlices; i++) {
            let x = windowWidth / 2;      //good apples fall at a random x and y
            let y = windowHeight / 2;
            let alice = new Alice(x, y, this.aliceAsset);
            this.alices.push(alice);
        }
    }
    draw() {
        background(0, 0, 0);
        this.typewriter.display();
        for (let i = 0; i < this.alices.length; i++) {

            if (this.alices[i].active) { //calls the functions in the apple class that drops the apples
                this.alices[i].shrink();
                this.alices[i].home();
            }
        }

        for (let i = 0; i < this.circles.length; i++) {
            fill(255);
            ellipse(this.circles[i].circleX, this.circles[i].circleY, this.circles[i].size, this.circles[i].size);
            stroke(255);
        }

        let x = width / 2 + cos(this.angle) * this.radius;
        let y = height / 2 + sin(this.angle) * this.radius;

        // Draw a white ellipse
        // fill(255);
        // ellipse(x, y, 20, 20);
        // stroke(255);
        let circle = {
            circleX: x,
            circleY: y,
            size: 20,
        }

        this.circles.push(circle);

        // Increment the angle and radius for the next ellipse
        this.angle += this.angleIncrement;
        this.radius += this.radiusIncrement;

    }
}