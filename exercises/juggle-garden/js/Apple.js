class Apple{
    constructor(x,y, appleImage){
        this.x = x; 
        this.y = y;
        this.vx = 0;  //velocity
        this.vy = 0;
        this.ax = 0;  //acceleration
        this.ay = 0; 
        this.maxSpeed = 10;
        this.size = 50;
        this.active = true; 
        this.image = appleImage; 
    }
}