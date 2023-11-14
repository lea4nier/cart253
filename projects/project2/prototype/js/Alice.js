class Alice {
    constructor(x, y, aliceAsset) {
        this.x = x;
        this.y = y;
        this.vx = 0;  //velocity
        this.vy = 0;
        this.ax = 0;  //acceleration
        this.ay = 0;
        this.maxSpeed = 2;  //max speed that apple can fall at 
        this.size = 200;
        this.w = 200;     //dimensions of apple
        this.h = 200;
        this.active = true;
        this.image = aliceAsset; //good (red) apples
        console.log("i exist");
    }
    gravity(force) {
        this.ay = this.ay + force;  //acceleration increases 
    }

    move() {
        console.log(this.x, this.y, this.vx, this.vy, this.ax, this.ay);
        this.vx = this.vx + this.ax;   //Add the acceleration to the velocity for both x and y axes
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);   //the apple cannot fall faster than the max speed 
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;   //Add the velocity to the position to move the ball
        this.y = this.y + this.vy;

        if (this.y - this.size / 2 > windowHeight / 2) {    //apple stops moving when it falls below the canvas 
            this.vy = 0;
            this.vx = 0;
            this.ax = 0;  //acceleration
            this.ay = 0;
        }
    }

    display() {     //displays apples
        push();
        image(this.image, this.x, this.y, this.w, this.h);
        pop();
    }
}