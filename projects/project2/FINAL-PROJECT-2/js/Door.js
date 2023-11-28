class Door {
    constructor() {
        this.doorY = height - 400;
        this.currentFrame = 0;

        this.door = loadImage('assets/images/door1.png');
        this.shoes = loadImage('assets/images/shoe.png');
        this.key = loadImage('assets/images/key.png');
    }

    draw() {
        background(0, 0, 0);
        this.doorY = height - 400;
        image(this.door, windowWidth / 8, this.doorY, 400, 400);

        image(this.shoes, 0, 0, windowWidth, windowHeight);

        let centerX = mouseX - 50;
        let centerY = mouseY - 50;

        image(this.key, centerX, centerY, 100, 100);

        if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 400 && mouseY > doorY && mouseY < doorY + 400) {
            if (mouseIsPressed) {
                currentState = new Open;
            }
        }
    }
}