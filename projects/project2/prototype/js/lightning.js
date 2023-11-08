class Lightning {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.alpha = 255;
        this.alpha2 = 255;
        this.strike = [];

    }
    bright() {

        this.x = this.x + random(-15, 15) * 3;
        this.y = this.y + random(5);

        let v = createVector(this.x, this.y * 15);

        if (this.y > 55) {
            this.strike.splice(0, 1);
            this.strike.y = -5;
            this.strike.x = random(width);
            this.alpha2 = 255;
        }
        else {
            this.alpha2 = 20;
            fill(255, this.alpha2);
            rect(0, 0, windowWidth, windowHeight);

            this.strike.push(v);
        }

        if (this.y > 300) {
            this.alpha = 0;
            this.y = this.strike.y;
            this.x = this.strike.x;
        }

    }
    display() {
        stroke(255, 244, 80, this.alpha);
        beginShape();
        for (let i = 0; i < this.strike.length; i++) {
            let pos = this.strike[i];
            noFill();
            vertex(pos.x, pos.y);

            endShape();
        }

        if (this.alpha < 0) {
            this.alpha = 255;
        }
        else {
            this.alpha -= 105;
        }
    }

}