class Cry {
    constructor() {
        this.cat3 = loadImage('assets/images/cat3.png');
        this.currentFrame = 0;
        this.gif3;
        this.gif3 = createImg('assets/images/cry.gif');
        this.gif3.position(windowWidth / 4, windowHeight / 10);
        this.gif3.size(800, 800);
        this.gif3.hide();
    }

    draw() {
        background(0, 0, 0);
        this.gif3.show();
        this.currentFrame = (this.currentFrame + 1) % 7;

        image(this.cat3, windowWidth / 8, windowHeight / 10, 150, 100);
    }

    mousePressed() {
        if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 150 && mouseY > windowHeight / 10 && mouseY < windowHeight / 10 + 100) {
            currentState = new TalkingCat(); // Handle the mouse press action for cat2
            this.gif3.hide();
        }
    }
}