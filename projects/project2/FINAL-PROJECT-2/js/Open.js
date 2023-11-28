class Open {
    constructor() {
        this.shoes = loadImage('assets/images/shoe.png');
        this.doorY = height - 400;
        this.gif2 = createImg('assets/images/door.gif');
        this.gif2.position(windowWidth / 8, this.doorY);
        this.gif2.size(400, 400);
        this.gif2.hide();
    }

    draw() {
        background(0, 0, 0);
        image(this.shoes, 0, 0, windowWidth, windowHeight);

        this.doorY = height - 400;
        this.gif2.show();
    }

    mousePressed() {
        currentState = new Cat();
        this.gif2.hide();
    }
}