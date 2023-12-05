class Alice {
    //Please see more detailed attributions in README File!
    //Alice class called in Title1, Title2, Title3, and Home/Ending states
    constructor(x, y, aliceAsset) {
        //constructor for Alice properties 
        this.x = x;
        this.y = y;
        this.vx = 0;  //velocity in the x direction
        this.vy = 0;//velocity in the y direction
        this.ax = 0;  //acceleration in the x direction
        this.ay = 0;//acceleration in the y direction
        this.maxSpeed = 2;  //max speed that alice can fall at 
        this.size = 200; //initial size of Alice 
        this.w = 200;     //dimensions of Alice
        this.h = 200;
        this.active = true; //Alice begins as active 
        this.image = aliceAsset; //image for aliceAsset
        this.shrinkRate = 0.5; //rate at which Alice shrinks
    }

    //Apply gravity force to Alice
    gravity(force) {
        this.ay = this.ay + force;  //acceleration increases 
    }

    //Alice falling called in Title1 state 
    move() {
        this.vx = this.vx + this.ax;   //Add the acceleration to the velocity for both x and y axes
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);   //alice cannot fall faster than the max speed 
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;   //Add the velocity to the position to move alice
        this.y = this.y + this.vy;

        if (this.y - this.size / 2 > windowHeight / 2) {    //Alice stops moving when she reaches the center of the screen 
            this.vy = 0;
            this.vx = 0;
            this.ax = 0;  //reset acceleration
            this.ay = 0;
        }
    }

    //displays alice 
    display() {
        push();
        image(this.image, this.x, this.y, this.w, this.h);
        pop();
    }

    //Alice follows user's mouse 
    follow() {
        let distanceX = mouseX - this.x;
        let distanceY = mouseY - this.y;

        //divide the distance to create more space between Alice and user's mouse
        distanceX = distanceX / 10;
        distanceY = distanceY / 10;

        this.x = this.x + distanceX;
        this.y = this.y + distanceY;

        //constrain Alice to stay inside rabbit hole 
        this.x = constrain(this.x, windowWidth / 3, windowWidth / 1.9);
        this.y = constrain(this.y, -windowHeight, windowHeight);
    }

    //Alice falls, this is used in title 3 so she can fall below the screen  
    fall() {
        this.vx = this.vx + this.ax;   //Add the acceleration to the velocity for both x and y axes
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);   //alice cannot fall faster than the max speed 
        this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

        this.x = this.x + this.vx;   //Add the velocity to the position to move alice
        this.y = this.y + this.vy;
    }

    //alice shrinks, used in ending state 
    shrink() {
        // gradually decrease the size
        this.size -= this.shrinkRate;

        // stop shrinking when the size is smaller than 0
        if (this.size <= 0) {
            this.size = 0;
            this.active = false; // deactivate the alice object when it's too small
        }
    }

    //displays alice for ending state 
    home() {
        push();
        // background(0, 0, 0);
        image(this.image, this.x, this.y, this.size, this.size);

        pop();
    }

}