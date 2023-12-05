class MouseGame {
    constructor() {
        this.startTime = millis();
        this.duration = 30000; //time limit of 10 seconds during game 
        this.mouseAsset = loadImage('assets/images/mouse.png');
        this.user = loadImage('assets/images/catch.png');
        this.mouse = new Mouse(random(windowWidth / 10, windowWidth / 2), random(windowHeight / 10, windowHeight / 2), this.mouseAsset);
    }

    draw() {
        background(0, 0, 0);
        let elapsed = millis() - this.startTime; //when the state changes to game the 10 second countdown begins 
        if (elapsed > this.duration) {
            currentState = new TalkingCat();  //if 10 seconds pass the state changes to "win"
        }

        this.mouse.display();
        this.mouse.game();

        let userX = mouseX - 75;
        let userY = mouseY - 75;

        image(this.user, userX, userY, 150, 150);
        if (
            userX < this.mouse.x + 100 &&
            userX + 150 > this.mouse.x &&
            userY < this.mouse.y + 100 &&
            userY + 150 > this.mouse.y
        ) {
            currentState = new WinMouse();  // Change the state to Win
        }
    }
}