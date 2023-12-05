class Cry {
    //Cry state for crying animation and cat 
    constructor() {
        this.cat3 = loadImage('assets/images/cat3.png'); //load cat image 
        this.currentFrame = 0; //reset frame for crying animation

        //load gif 3, crying animation
        this.gif3;
        this.gif3 = createImg('assets/images/cry.gif');

        //attributes for gif3
        this.gif3.position(windowWidth / 4, windowHeight / 10);
        this.gif3.size(800, 800);

        //hide gif3
        this.gif3.hide();

        //create typewriter to display text
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Come, there's no use in crying like that!
        \n I advise you to leave off this minute!
        \n ...she generally gave herself very good advice 
        \n...(though she very seldom followed it)`, windowWidth / 3, windowHeight / 4);
    }

    //draws crying gif, cat, and typewriter text 
    draw() {
        background(0, 0, 0); //set background to black
        this.typewriter.display(); //display typewriter text 
        this.gif3.show(); //show gif3
        this.currentFrame = (this.currentFrame + 1) % 7; // Cycle through frames of the crying animation

        // Display the cat image
        image(this.cat3, windowWidth / 8, windowHeight / 10, 250, 200);
    }

    //if the mouse is pressed over the cat image the state goes back to TalkingCat
    mousePressed() {
        if (mouseX > windowWidth / 8 && mouseX < windowWidth / 8 + 250 && mouseY > windowHeight / 10 && mouseY < windowHeight / 10 + 200) {
            currentState = new TalkingCat();
            this.gif3.hide(); //hide the crying animation gif 
        }
    }
}