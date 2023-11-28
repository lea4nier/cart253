class Closer {
    constructor() {
        this.drinkme = loadImage('assets/images/drinkme.png');
        this.table = loadImage('assets/images/table.png');
    }

    draw() {
        background(0, 0, 0);
        image(this.table, windowWidth / 6.5, windowHeight / 4, 900, 900);
        image(this.drinkme, windowWidth / 2, windowHeight / 15, 300, 300);
    }

    mousePressed() {
        currentState = new Drink();
    }
}