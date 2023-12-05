class Bottle {
    //bottle image and speech recognition used to check if the user says "drink me" 

    constructor() {
        //load full bottle image
        this.drinkme = loadImage('assets/images/drinkme.png');

        //create new p5.speechRec object for speech recognition (will prompt for mic access)
        this.mySpeechRec = new p5.SpeechRec();

        // bind callback function to trcwhen speech is recognized
        this.mySpeechRec.onResult = this.showResult.bind(this);

        // set speech recognition properties
        this.mySpeechRec.continuous = false;
        this.mySpeechRec.interimResults = true;

        // start listening
        this.mySpeechRec.start();

        // //set up typewriter
        this.typewriter = new Typewriter(); //creates new typewriter from typewriter class
        this.typewriter.typewrite(`say: "drink me"`, windowWidth / 3, windowHeight / 4);//setting up where the typewriter text goes and what it says
    }

    // log what the user says into mic
    showResult() {
        console.log(this.mySpeechRec.resultString);
    }

    // draws full bottle image, typewriter text, and recognizes speech  
    draw() {
        background(0, 0, 0); //draw black background
        this.typewriter.display(); //typewriter text
        image(this.drinkme, windowWidth / 3, windowHeight / 4, 400, 400); //full bottle image

        // convert the recognized speech to lowercase
        let lowerStr = "";
        if (this.mySpeechRec.resultString) {
            lowerStr = this.mySpeechRec.resultString.toLowerCase();
        }

        // extract the most recent word from the recognized speech
        let mostRecentWord = lowerStr.split(" ").pop();
        if (lowerStr.includes("drink me")) {
            currentState = new DrinkMe();  //if the user said "drink me" the state changes to the drinkMe state with animation
            this.mySpeechRec.stop(); //stops mic access 
        }
    }
}
