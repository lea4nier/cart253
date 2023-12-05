class Flower {
    //Flower class called in Garden state 
    constructor(x, y, size, stemLength, petalColor) {
        // The constructor() sets up a flower's properties
        this.x = x; //flower position
        this.y = y;
        this.size = size; //curent size of the flower
        this.maxSize = 40; // max size of flower 
        this.stemLength = stemLength;
        this.stemThickness = 10; //stem thickness 
        this.petalThickness = 10; //petal thickness 
        this.maxPetalThickness = 30; // limit growth
        this.minPetalThickness = 0; //minimum petal thickness 
        this.minSize = 5; //minimum size of flower 

        // Color information
        this.stemColor = {
            r: 50,
            g: 150,
            b: 50
        };
        this.petalColor = {
            r: 255,
            g: 255,
            b: 255,
        };

        //state of the flower 
        this.alive = true;

    }

    //called when flower is pollinated by butterfly and grows 
    pollinate() {
        // Choose a random amount to grow
        let growth = random(0, 0.5);

        // Increase the petal thickness (divide by 10 to make it less rapid)
        this.petalThickness = this.petalThickness + growth / 10;

        // Increase the centre of the flower
        this.size = this.size + growth;

        // Constrain the elements
        this.petalThickness = constrain(this.petalThickness, this.minPetalThickness, this.maxPetalThickness);
        this.size = constrain(this.size, this.minSize, this.maxSize);
    }

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
        // fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
        stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
        ellipse(this.x, this.y, this.size);
        pop();
    }

    //if the user presses a flower it turns red and grows 
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