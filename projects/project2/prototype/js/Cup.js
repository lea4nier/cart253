class Cup {
    constructor(x, y, cupImage) {
        this.x = x;
        this.y = y;
        this.vx = 0;  //velocity
        this.vy = 0;
        this.ax = 0;  //acceleration
        this.ay = 0;
        this.maxSpeed = 2;  //max speed that apple can fall at 
        this.size = 10;
        this.w = 90;     //dimensions of apple
        this.h = 90;
        this.active = true;
        this.image = cupImage; //good (red) apples
        this.force = 0.0025;
    }

    gravity() {
        this.ay = this.ay - this.force;  //acceleration increases 
    }

    move() {
        this.vx = this.vx + this.ax;   //Add the acceleration to the velocity for both x and y axes
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);   //the apple cannot fall faster than the max speed 
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;   //Add the velocity to the position to move the ball
        this.y = this.y + this.vy;

        if (this.y < 0) {    //apple stops moving when it falls below the canvas 
            this.active = false;
        }
    }

    display() {
        //displays apples
        push();
        image(this.image, this.x, this.y, this.w, this.h); console.log(this.y);
        pop();
    }
}