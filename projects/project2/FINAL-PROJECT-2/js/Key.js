class Key {
    constructor() {
        this.currentFrame = 0;
        this.gif1;
        this.gif1 = createImg('assets/images/key.gif');
        this.gif1.position(windowWidth / 3 + 30, windowHeight / 2);
        this.gif1.size(100, 100);
        this.gif1.hide();
        this.empty = loadImage('assets/images/empty.png');
    }

    draw() {
        background(0, 0, 0);
        image(this.empty, windowWidth / 3, windowHeight / 4, 400, 400);
        this.gif1.show();
        this.currentFrame = (this.currentFrame + 1) % 7;
    }

    mousePressed() {
        currentState = new Door();
        this.gif1.hide();
    }
}