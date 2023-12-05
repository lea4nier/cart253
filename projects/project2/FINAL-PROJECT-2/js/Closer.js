class Closer {
    //new class to create illusion of alice walking closer to table
    constructor() {
        //preload images
        this.drinkme = loadImage('assets/images/drinkme.png'); //bottle image
        this.table = loadImage('assets/images/table.png'); //table image 

    }

    //draws drinkme bottle on top of table, updated position and size from last class 
    draw() {
        background(0, 0, 0);
        image(this.table, windowWidth / 6.5, windowHeight / 4, 900, 900);
        image(this.drinkme, windowWidth / 2, windowHeight / 15, 300, 300);
    }

    // transition to the next state when the mouse is pressed.
    mousePressed() {
        currentState = new Bottle();
    }
}