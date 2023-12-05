class Mouse {
    constructor(x, y, mouseAsset) {
        this.image = mouseAsset;
        this.x = x;
        this.y = y;
        this.maxX = windowWidth / 2;
        this.directionX = 1;  // Initial direction, 1 for right, -1 for left
        this.directionY = 1;  // Initial direction, 1 for down, -1 for up
        this.speed = 5;
    }

    move() {
        this.x += 5;

        if (this.x >= this.maxX) {
            this.x = this.maxX;
        }
    }

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

    display() {
        image(this.image, this.x, this.y, 100, 100);
    }
}