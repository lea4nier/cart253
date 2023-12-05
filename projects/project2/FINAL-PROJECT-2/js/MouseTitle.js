class MouseTitle {
    constructor() {
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Congrats! You have discovered a secret game...
        \nYou have 10 seconds to try and catch the mouse!
        \n click to start`, windowWidth / 18, windowHeight / 2);
    }

    draw() {
        background(0, 0, 0);
        this.typewriter.display();
    }

    mousePressed() {
        currentState = new Cat();
    }

}