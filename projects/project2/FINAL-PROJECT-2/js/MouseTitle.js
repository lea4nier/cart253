class MouseTitle {
    constructor() {
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Congrats! You have discovered a secret game...
        \nYou have 10 seconds to try and catch the mouse!
        \n click to start`, windowWidth / 18, windowHeight / 2);
        this.mouseAsset = loadImage('assets/images/mouse.png');
        this.mouse = new Mouse(windowWidth / 10, windowHeight / 2, this.mouseAsset);
    }

    draw() {
        background(0, 0, 0);
        this.typewriter.display();
        this.mouse.display();
        this.mouse.move();
    }

    mousePressed() {
        currentState = new MouseGame();
    }

}