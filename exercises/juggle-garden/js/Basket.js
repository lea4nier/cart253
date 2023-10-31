class Basket{
    constructor(x, y, basketImage) {
        this.x = x;
        this.y = y;
        this.image = basketImage;
      }
    
      move(){
        this.x = mouseX;
    }

      display() {
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, 400, 400);
      }
}