class TalkingCat {
    //TalkingCat class where user chooses between 3 options for next state
    //choice to "go home", "cry", or "paint white flowers red"
    constructor() {
        //load different cat images 
        this.catimage = loadImage('assets/images/cat1.png');
        this.cat2 = loadImage('assets/images/cat2.png');
        this.cat3 = loadImage('assets/images/cat3.png');
        this.cat4 = loadImage('assets/images/cat4.png');

        //load different text bubbles for choices 
        this.choice1 = loadImage('assets/images/choice1.png');
        this.choice2 = loadImage('assets/images/choice2.png');
        this.choice3 = loadImage('assets/images/choice3.png');

        //initial size for choices 
        this.size = 50;

        //growth rate for choices 
        this.growthRate = 1;

        //create new typewriter and display text
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`we're all mad here. I'm mad. You're mad.`, windowWidth / 2.1, windowHeight / 4); //new text 
    }

    //draw choices animating and multiple cat images depending on where the user's mouse is 
    draw() {
        background(0, 0, 0); //set the background to black 
        this.typewriter.display();// display typewriter text 

        //display cat image with fixed size and position
        image(this.catimage, windowWidth / 3, windowHeight / 4, 550, 500);

        // Increases the text bubble sizes
        this.size += this.growthRate;

        //limit choice text bubble size 
        if (this.size > 400) {
            this.size = 400; // Set size to the limit
        }

        //display choices with size that will change
        image(this.choice1, (windowWidth / 3) + 400, windowHeight / 4, this.size, this.size);
        image(this.choice2, (windowWidth / 3) + 400, (windowHeight / 4) + 200, this.size, this.size);
        image(this.choice3, (windowWidth / 3) - 350, windowHeight / 4, this.size, this.size);

        //if mouse hovers over choice 1 (paint white flowers...) then the cat image changes
        if (mouseX > (windowWidth / 3) + 400 && mouseX < (windowWidth / 3) + 400 + this.size &&
            mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + this.size) {
            this.catimage = this.cat2;
            cursor(HAND); //cursor changes to hand so user knows it's clickable
        }

        //if mouse hovers over choice 2 (cry) then the cat image changes
        else if (mouseX > (windowWidth / 3) + 400 && mouseX < (windowWidth / 3) + 400 + this.size &&
            mouseY > (windowHeight / 4) + 200 && mouseY < (windowHeight / 4) + 200 + this.size) {
            this.catimage = this.cat3;
            cursor(HAND);//cursor changes to hand so user knows it's clickable
        }

        //if mouse hovers over choice 3 (go home) then the cat image changes
        else if (mouseX > (windowWidth / 3) - 350 && mouseX < (windowWidth / 3) - 350 + this.size &&
            mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + this.size) {
            this.catimage = this.cat4;
            cursor(HAND);//cursor changes to hand so user knows it's clickable
        }
        else {
            this.catimage = this.catimage;  // if the mouse is anywhere else it is not clickable
            cursor(ARROW);//cursor changes to arrow so user knows it's not clickable
        }
    }

    //if the user presses their mouse over a certain choice the state changes
    mousePressed() {
        //if mouse hovers over choice 1 (paint white flowers...) then the cat image changes
        if (mouseX > (windowWidth / 3) + 400 && mouseX < (windowWidth / 3) + 400 + this.size &&
            mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + this.size) {
            currentState = new Garden();
        }

        //if mouse hovers over choice 2 (cry) then the cat image changes
        else if (mouseX > (windowWidth / 3) + 400 && mouseX < (windowWidth / 3) + 400 + this.size &&
            mouseY > (windowHeight / 4) + 200 && mouseY < (windowHeight / 4) + 200 + this.size) {
            currentState = new Cry();
        }

        //if mouse hovers over choice 3 (go home) then the cat image changes
        else if (mouseX > (windowWidth / 3) - 350 && mouseX < (windowWidth / 3) - 350 + this.size &&
            mouseY > windowHeight / 4 && mouseY < windowHeight / 4 + this.size) {
            currentState = new Home();
        }
    }
}

