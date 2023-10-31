class Basket{
    constructor(x, y, basketImage) {
        this.x = x;
        this.y = y;
        this.image = basketImage;
      }
    
      display() {
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y);
      }
}