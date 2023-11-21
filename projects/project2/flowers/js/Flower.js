class Flower {

    // The constructor() sets up a flower's properties
    constructor(x, y, size, stemLength, petalColor) {
        // Position and size information
        this.x = x;
        this.y = y;
        this.size = size;
        this.maxSize = 40; // NEW! To limit growth
        this.stemLength = stemLength;
        this.stemThickness = 10;
        this.petalThickness = 10;
        this.maxPetalThickness = 50; // NEW! To limit growth
        this.minPetalThickness = 0;
        this.minSize = 5;
        // Color information
        this.stemColor = {
            r: 50,
            g: 150,
            b: 50
        };
        this.petalColor = petalColor;
        this.centreColor = {
            r: 50,
            g: 0,
            b: 0
        };
        this.alive = true;

    }

    // shrink()
    // Shrinks the flower
    shrink() {
        // Choose a random amount to shrink
        this.petalColor = {
            r: 255,
            g: 255,
            b: 255,
        }
        let shrinkage = random(0, 0.1);
        // Reduce the petal thickness (divide by 10 to make it less rapid)
        this.petalThickness = this.petalThickness - shrinkage / 10;
        // Reduce the centre of the flower
        this.size = this.size - shrinkage;

        this.size = constrain(this.size, this.minSize, this.maxSize);

        // If any of the key properties reach 0 or less, the flower is dead
        // if (this.petalThickness <= 0 || this.size <= 0) {
        //     this.alive = false;
        // }
    }

    // NEW! pollinate() handles the flower being pollinated (it grows)
    pollinate() {
        // Choose a random amount to grow
        let growth = random(0, 0.5);
        // this.petalColor = {
        //     r: 255,
        //     g: 255,
        //     b: 255,
        // }
        // Increase the petal thickness (divide by 10 to make it less rapid)
        this.petalThickness = this.petalThickness + growth / 10;
        // Increase the centre of the flower
        this.size = this.size + growth;

        // Constrain the elements
        this.petalThickness = constrain(this.petalThickness, this.minPetalThickness, this.maxPetalThickness);
        this.size = constrain(this.size, this.minSize, this.maxSize);
    }

    grow() {
        if (this.petalThickness === this.minPetalThickness || this.size === this.minSize) {
            let growth = random(0, 0.5);
            // Increase the petal thickness (divide by 10 to make it less rapid)
            this.petalThickness = this.petalThickness + growth / 10;
            // Increase the centre of the flower
            this.size = this.size + growth;

            // // Constrain the elements
            // this.petalThickness = constrain(this.petalThickness, this.minPetalThickness, this.maxPetalThickness);
            // this.size = constrain(this.size, this.minSize, this.maxSize);
        }
    }

    // display()
    // Displays the flower on the canvas
    display() {
        push();
        // Set the stroke weight for the petals and the stem
        strokeWeight(this.stemThickness);
        // Draw a line for the stem
        stroke(this.stemColor.r, this.stemColor.g, this.stemColor.b);
        line(this.x, this.y, this.x, this.y + this.stemLength);
        // Draw a circle with a heavy outline for the flower
        strokeWeight(this.petalThickness);
        fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        // this.petalColor = {
        //     r: 255,
        //     g: 255,
        //     b: 255,
        // }
        pop();
    }

    mousePressed() {
        // Calculate the distance between this flower and the mouse
        let d = dist(this.x, this.y, mouseX, mouseY);
        // Check if the distance is less than the head of the flower
        if (d < this.size / 2 + this.petalThickness) {
            console.log("pressed");
            // If it is, this flower was clicked, so increase its stem length
            this.stemLength = this.stemLength + 5;
            // And also change its y position so it grows upward! (If we didn't do this
            // the then stem would grow downward, which would look weird.)
            this.y = this.y - 5;
            let growth = random(0, 0.5);
            // Increase the petal thickness (divide by 10 to make it less rapid)
            this.petalThickness = this.maxPetalThickness + growth / 10;
            // Increase the centre of the flower
            this.size = this.maxSize + growth;
            this.petalColor = {
                r: 255,
                g: 0,
                b: 0,
            }
        }
    }
}