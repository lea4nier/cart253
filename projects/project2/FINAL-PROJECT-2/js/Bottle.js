class Bottle {
    constructor() {
        this.drinkme = loadImage('assets/images/drinkme.png');
        this.mySpeechRec = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
        this.mySpeechRec.onResult = this.showResult.bind(this);  // bind callback function to trcwhen speech is recognized
        this.mySpeechRec.continuous = true;
        this.mySpeechRec.interimResults = true;
        this.mySpeechRec.start(); // start listening
    }

    showResult() {
        console.log(this.mySpeechRec.resultString); // log what the user says into mic
    }

    draw() {
        background(0, 0, 0);
        image(this.drinkme, windowWidth / 3, windowHeight / 4, 400, 400);
        text('say: "drink me"', windowWidth / 3, windowHeight / 8);
        fill(221, 88, 245);
        textSize(60);

        let lowerStr = "";
        if (this.mySpeechRec.resultString) {
            lowerStr = this.mySpeechRec.resultString.toLowerCase();
        }

        let mostRecentWord = lowerStr.split(" ").pop();
        if (lowerStr.includes("drink me")) {
            currentState = new DrinkMe();
        }
    }

    mousePressed() {
        currentState = new DrinkMe();
        this.mySpeechRec.stop();
    }
}
