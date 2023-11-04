class Basket {
    constructor(x, y, basketImage) {
        this.x = x;
        this.y = y;
        this.image = basketImage;
        this.size = 400;
        this.speed = 6.5;
        this.vx = 0;
        this.vy = 0;
    }

    move() {
        this.x += this.vx;
        this.y += this.vy;
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.size, this.size);
    }

    keyPressed(keyCode) {
        if (keyCode === 37) {
            this.vx = -this.speed;
        }
        else if (keyCode === 39) {
            this.vx = this.speed;
        }
    }

    keyReleased(keyCode) {
        if (keyCode === 37) {
            this.vx = 0;
        }
        else if (keyCode === 39) {
            this.vx = 0;
        }
    }
}