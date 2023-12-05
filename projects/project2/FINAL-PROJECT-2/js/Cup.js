class Cup {
    //class for teacups called in Title2 state 
    constructor(x, y, cupImage) {
        //constructor for properties of teacups 
        this.x = x;
        this.y = y;
        this.vx = 0;  //velocity
        this.vy = 0;
        this.ax = 0;  //acceleration
        this.ay = 0;
        this.maxSpeed = 3;  //max speed that cup can fall at 
        this.size = 10; //size of the cup
        this.w = 90;     //dimensions of cup
        this.h = 90;
        this.active = true; //boolean value to check if the cup is active 
        this.image = cupImage; //cup image 
        this.force = 0.0025; //graity force (even though I make them rise)
    }

    //method to apply gravity in a way that make cups rise 
    gravity() {
        this.ay = this.ay - this.force;  //acceleration increases upward 
    }

    //makes cups rise 
    move() {
        this.vx = this.vx + this.ax;   //Add the acceleration to the velocity for both x and y axes
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);   //the cup cannot fall faster than the max speed 
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;   //Add the velocity to the position to move the ball
        this.y = this.y + this.vy;

        if (this.y < 0) {    //cup stops moving when it falls outside the canvas 
            this.active = false;
        }
    }

    //cups bounce off of Alice 
    bounce(Alice) {
        //calculate distance between Alice and cup 
        let d = dist(this.x, this.y, Alice.x, Alice.y);

        // check if they overlap
        if (d < this.size / 2 + Alice.size / 2) {
            // Bounce off Alice
            let dx = this.x - Alice.x; //calculate the horizontal distance between the cup and Alice
            //Adjust the cup's velocity based on the relative position to Alice
            this.vx += map(dx, -Alice.size / 2, Alice.size / 2, -2, 2); //if dx is negative (cup on the left of alice) the cup's velocity is increased.
            //if the dx is positive (cup to the right of alice) the cup's velocity is decreased. 
            this.vy = -this.vy; //reverse the y velocity  
            this.ay = 0; //resets acceleration to 0
        }
    }

    //displays cups
    display() {
        push();
        image(this.image, this.x, this.y, this.w, this.h);
        pop();
    }
}