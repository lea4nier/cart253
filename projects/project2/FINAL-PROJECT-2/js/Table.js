class Table {
    constructor() {
        this.drinkme = loadImage('assets/images/drinkme.png');
        this.table = loadImage('assets/images/table.png');
    }

    draw() {
        background(0, 0, 0);
        image(this.table, windowWidth / 3, windowHeight / 4, 400, 400);
        image(this.drinkme, windowWidth / 2, windowHeight / 5, 100, 100);
    }

    mousePressed() {
        currentState = new Closer();
    }
}