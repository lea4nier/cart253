class DrinkMe {
    //bottle drinking animation using for loop
    constructor() {
        // array to store frames of the animation
        this.frames = [];

        // index of the current frame
        this.currentFrame = 0;

        // frame rate for the animation
        this.fr = 1;

        //load full bottle image and array of bottle for animation
        for (let i = 1; i <= 9; i++) {   //I have 9 images 
            let frame = loadImage('assets/images/bottle' + i + '.png');
            this.frames.push(frame);
        }

    }

    //draw bottle animation 
    draw() {
        background(0, 0, 0); //set background to black
        cursor(ARROW); //set cursor back to arrow 
        image(this.frames[this.currentFrame], windowWidth / 3, windowHeight / 4, 400, 400);  // displays the current frame of the animation
        frameRate(this.fr); //frae rate for animation

        // advance to the next frame (and loop back to 0 if you reach the end)
        this.currentFrame = (this.currentFrame + 1);

        // transition to the next state when reaching the last frame
        if (this.currentFrame === 8) {
            currentState = new Key();
        }
    }
}