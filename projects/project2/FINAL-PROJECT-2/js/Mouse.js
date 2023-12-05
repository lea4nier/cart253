class Mouse {
    constructor(x, y, mouseAsset) {
        this.image = mouseAsset;
        this.x = x;
        this.y = y;
        this.maxX = windowWidth / 2;
    }

    move() {
        this.x += 5;

        if (this.x >= this.maxX) {
            this.x = this.maxX;
        }
    }

    display() {
        image(this.image, this.x, this.y, 100, 100);
    }
}