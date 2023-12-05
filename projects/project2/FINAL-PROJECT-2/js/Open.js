class Open {
    //Open state with door opening animation and text 
    constructor() {
        //load shoe image
        this.shoes = loadImage('assets/images/shoe.png');

        //y coordinate of door image
        this.doorY = height - 400;

        //load gif2, door opening animation
        this.gif2 = createImg('assets/images/door.gif');

        //attributes for gif2
        this.gif2.position(windowWidth / 8, this.doorY);
        this.gif2.size(400, 400);

        //hide gif2
        this.gif2.hide();

        //create typewriter to display text 
        this.typewriter = new Typewriter();
        this.typewriter.typewrite(`Alice opened the door and found that it led into a small passage,
        \n not much larger than a rat-hole...`, windowWidth / 18, windowHeight / 2);
    }

    //draw door opening animation, typewriter text, and shoe image 
    draw() {
        background(0, 0, 0);
        this.typewriter.display();
        image(this.shoes, 0, 0, windowWidth, windowHeight); //shoe image stays in the same place 

        //show door animation gif 
        this.gif2.show();
    }

    //transitions to next state when mouse is pressed
    mousePressed() {
        currentState = new Cat();  //cat state starts 
        this.gif2.hide(); //hide door opening gif 
    }
}