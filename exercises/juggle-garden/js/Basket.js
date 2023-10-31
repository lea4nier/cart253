class Basket{
    constructor(x, y, basketImage) {
        this.x = x;
        this.y = y;
        this.image = basketImage;

        this.speed = 5;
        this.vx = 0;
        this.vy = 0;
      }
    
      move(){
        this.x += this.vx;
        this.y += this.vy;
    }

      display() {
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, 400, 400);
      }

      keyPressed(keyCode) {
        if (keyCode === 37) {
            this.vx = -this.speed;
        }
        else if (keyCode === 39) {
            this.vx = this.speed;
        }

        if (keyCode === 38) {
            this.vy = -this.speed;
        }
        else if (keyCode === 40) {
            this.vy = this.speed;
        }
    }

    keyReleased(keyCode) {
        if (keyCode === 37) {
            this.vx = 0;
        }
        else if (keyCode === 39) {
            this.vx = 0;
        }

        if (keyCode === 38) {
            this.vy = 0;
        }
        else if (keyCode === 40) {
            this.vy = 0;
        }
    }
}