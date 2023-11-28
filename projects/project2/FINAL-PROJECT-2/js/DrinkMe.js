class DrinkMe {
    constructor() {

        this.frames = [];
        this.currentFrame = 0;
        this.fr = 1;

        for (let i = 1; i <= 9; i++) {
            let frame = loadImage('assets/images/bottle' + i + '.png');
            this.frames.push(frame);
        }

    }
    draw() {
        background(0, 0, 0);
        frameRate(this.fr);
        image(this.frames[this.currentFrame], windowWidth / 3, windowHeight / 4, 400, 400);  //displays the images in the array
        // Advance to the next frame (and loop back to 0 if you reach the end)

        this.currentFrame = (this.currentFrame + 1);

        if (this.currentFrame === 8) {
            currentState = new Key();
        }
    }
}