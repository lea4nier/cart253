class WinMouse {
    constructor() {
        this.cat2 = loadImage('assets/images/cat2.png');
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Lucky girl! You caught the mouse!`, windowWidth / 18, windowHeight / 2);
    }

    draw() {
        background(0, 0, 0);
        this.typewriter.display();
    }
}