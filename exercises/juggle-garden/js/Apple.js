class Apple{
    constructor(x,y, appleImage){
        this.x = x; 
        this.y = y;
        this.vx = 0;  //velocity
        this.vy = 0;
        this.ax = 0;  //acceleration
        this.ay = 0; 
        this.maxSpeed = 10;
        this.size = 10;
        this.w = 70; 
        this.h = 70;
        this.active = true; 
        this.image = appleImage; 
    }

    gravity(force){
        this.ay = this.ay + force;  //acceleration increases 
    }

    move(){
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.y - this.size/2 > height) {
      this.active = false;
        }
    }

    display() {
        push();
        image(this.image, this.x, this.y, this.w, this.h);
        pop();
      }
}