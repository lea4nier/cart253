class Butterfly {
    //Please see more detailed attributions in README File!
    //Butterfly class called in Garden state 
    constructor(x, y) {
        //constructor for butterfly's properties
        this.x = x;
        this.y = y;
        this.size = 40; // initial size of the butterfly
        this.minSize = 10; // if we get smaller than this minimum we're dead
        this.maxSize = 40; // max butterfly size 
        this.vx = 0; // velocity in the x direction
        this.vy = 0; // velocity in the y direction
        this.speed = 5; // speed of the butterfly's movement
        this.growRate = 0.1; // How much the butterfly grows if it pollinates
        this.shrinkRate = 0.05; // How much smaller we get each frame
        this.jitteriness = 0.1; // How likely the butterfly is to change direction
        this.alive = true; // The butterfly starts out alive!
    }

    //check if butterfly has pollinated flower 
    tryToPollinate(flower) {
        // Calculate the distance between the butterfly and the flower
        let d = dist(this.x, this.y, flower.x, flower.y);
        // If they overlap...
        if (d < this.size / 2 + flower.size / 2) {
            // The butterfly should grow
            // calls the grow() method for this butterfly
            this.grow();
            // The flower should react to being pollinated so we call its method
            // that handles that!
            flower.pollinate();
        }
    }

    // grow() causes the butterfly to get bigger up to a maximum (called by tryToPollinate())
    grow() {
        // Grow by increasing the size by a set amount
        this.size = this.size + this.growRate;
        // Constrain the growth to a maximum
        this.size = constrain(this.size, 0, this.maxSize);
    }

    // move() moves the butterfly by potentially changing direction
    // and then changing position based on velocity
    move() {
        // First check if we should change direction
        let r = random(0, 1);
        if (r < this.jitteriness) {
            this.vx = random(-this.speed, this.speed);
            this.vy = random(-this.speed, this.speed);
        }

        // Update position with velocity to actually move
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        // Constrain to the canvas (guess it's a walled garden!)
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    // display() draws our butterfly onto the canvas
    display() {
        //draw butterfly body
        push();
        fill(0); // Set the fill color to black
        ellipse(this.x, this.y, this.size);
        pop();

        //draw butterfly wings
        push();
        fill(168, 199, 247); // Set the fill color to blue
        ellipse(this.x - this.size / 4, this.y, this.size / 2, this.size);
        ellipse(this.x + this.size / 4, this.y, this.size / 2, this.size);
        pop();
    }

    //when I added this function the flower colors actually change color. Happy mistake!
    mousePressed() {
        //butterfly body
        push();
        fill(0); // Set the fill color to black
        ellipse(this.x, this.y, this.size);
        pop();

        //Makes the flower colors change color but I kept it because I liked it   
        //I imagine it's because I didn't use push and pop
        fill(random(0, 255), random(0, 255), random(0, 255));
        ellipse(this.x - this.size / 4, this.y, this.size / 2, this.size);
        ellipse(this.x + this.size / 4, this.y, this.size / 2, this.size);

    }
}