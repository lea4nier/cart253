class Table {
    //table with bottle far away from alice 
    constructor() {
        //preload images 
        this.drinkme = loadImage('assets/images/drinkme.png'); //bottle image
        this.table = loadImage('assets/images/table.png'); //table image
    }

    //draws drinkme bottle on top of table 
    draw() {
        background(0, 0, 0); //set background to black
        image(this.table, windowWidth / 3, windowHeight / 4, 400, 400);
        image(this.drinkme, windowWidth / 2, windowHeight / 5, 100, 100);
    }

    // transition to the next state when the mouse is pressed.
    mousePressed() {
        currentState = new Closer();
    }
}