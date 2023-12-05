class TalkingCat {
    constructor() {
        this.catimage = loadImage('assets/images/cat1.png');
        this.cat2 = loadImage('assets/images/cat2.png');
        this.cat3 = loadImage('assets/images/cat3.png');
        this.cat4 = loadImage('assets/images/cat4.png');

        this.choice1 = loadImage('assets/images/choice1.png');
        this.choice2 = loadImage('assets/images/choice2.png');
        this.choice3 = loadImage('assets/images/choice3.png');

        this.size = 50;
        this.growthRate = 1;
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`we're all mad here. I'm mad. You're mad.`, windowWidth / 2.1, windowHeight / 4);
    }

    draw() {
        background(0, 0, 0);
        this.typewriter.display();
        image(this.catimage, windowWidth / 3, windowHeight / 4, 550, 500);
        // Increases the text bubble sizes
        this.size += this.growthRate;

        if (this.size > 400) {
            this.size = 400; // Set size to the limit
        }


        image(this.choice1, (windowWidth / 3) + 400, windowHeight / 4, this.size, this.size);
        image(this.choice2, (windowWidth / 3) + 400, (windowHeight / 4) + 200, this.size, this.size);
        image(this.choice3, (windowWidth / 3) - 350, windowHeight / 4, this.size, this.size);


        if (mouseX > (windowWidth / 3) + 400 && mouseX < (windowWidth / 3) + 400 + this.size &&
            mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + this.size) {
            this.catimage = this.cat2; //if mouse hovers over choice 1 (paint white flowers...) then the cat image changes
            cursor(HAND);
        }

        else if (mouseX > (windowWidth / 3) + 400 && mouseX < (windowWidth / 3) + 400 + this.size &&
            mouseY > (windowHeight / 4) + 200 && mouseY < (windowHeight / 4) + 200 + this.size) {
            this.catimage = this.cat3; //if mouse hovers over choice 2 (cry) then the cat image changes
            cursor(HAND);
        }
        // Check if mouse is over choice 3
        else if (mouseX > (windowWidth / 3) - 350 && mouseX < (windowWidth / 3) - 350 + this.size &&
            mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + this.size) {
            this.catimage = this.cat4; //if mouse hovers over choice 3 (go home) then the cat image changes
            cursor(HAND);
        }
        else {
            this.catimage = this.catimage;  // if the mouse is anywhere else it is not clickable
            cursor(ARROW);
        }
    }

    mousePressed() {
        if (mouseX > (windowWidth / 3) + 400 && mouseX < (windowWidth / 3) + 400 + this.size &&
            mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + this.size) {
            currentState = new Garden(); //if mouse hovers over choice 1 (paint white flowers...) then the cat image changes
        }

        else if (mouseX > (windowWidth / 3) + 400 && mouseX < (windowWidth / 3) + 400 + this.size &&
            mouseY > (windowHeight / 4) + 200 && mouseY < (windowHeight / 4) + 200 + this.size) {
            currentState = new Cry(); //if mouse hovers over choice 2 (cry) then the cat image changes
        }

        else if (mouseX > (windowWidth / 3) - 350 && mouseX < (windowWidth / 3) - 350 + this.size &&
            mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + this.size) {
            currentState = new Home(); //if mouse hovers over choice 3 (go home) then the cat image changes
        }
    }
}

