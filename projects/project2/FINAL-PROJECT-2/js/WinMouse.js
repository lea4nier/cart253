class WinMouse {
    constructor() {
        this.cat2 = loadImage('assets/images/cat3.png');
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Lucky girl! You caught the mouse!`, windowWidth / 18, windowHeight / 2);
    }

    draw() {
        background(0, 0, 0);
        this.typewriter.display();
        image(this.cat2, windowWidth / 2, windowHeight / 4, 300, 300);

        if (mouseX > windowWidth / 2 && mouseX < windowWidth / 2 + 300 && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + 300) {
            cursor(HAND);
        }
        else {
            cursor(ARROW);
        }
    }

    mousePressed() {
        if (mouseX > windowWidth / 2 && mouseX < windowWidth / 2 + 300 && mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + 300) {
            currentState = new TalkingCat(); // If the user presses the cat2 image then they go back to the TalkingCat state
            cursor(HAND);
        }
    }
}