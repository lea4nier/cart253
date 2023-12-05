class Mouse {
    //Mouse class for mouse obkect used in secret game (MouseTitle, MouseGame) and Garden states 
    constructor(x, y, mouseAsset) {
        this.image = mouseAsset; //mouse image is preloaded in states it is being used in 
        this.x = x; //mouse position 
        this.y = y;
        this.maxX = windowWidth / 2; //maximum X-coordinate for mouse movement
        this.directionX = 1;  // Initial direction, 1 for right, -1 for left
        this.directionY = 1;  // Initial direction, 1 for down, -1 for up
        this.speed = 5; //speed of mouse movement 
    }

    //move function that makes mouse move from left to right of screen
    move() {
        this.x += 5;  //mouse moves in increments of 5 px 

        //check if mouse x-coordinate exceeds max limit
        if (this.x >= this.maxX) {
            this.x = this.maxX; //reset to max limit so mouse stays there 
        }
    }

    //game function that makes mouse run around the canvas 
    game() {
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;

        // Change direction if the mouse reaches the screen boundaries
        if (this.x >= windowWidth || this.x <= 0) {
            this.directionX *= -1;  // Reverse direction on reaching horizontal boundaries
        }
        if (this.y >= windowHeight || this.y <= 0) {
            this.directionY *= -1;  // Reverse direction on reaching vertical boundaries
        }
    }

    //display function so that mouse image draws on canvas 
    display() {
        image(this.image, this.x, this.y, 100, 100);
    }
}