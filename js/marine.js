class Marine {
    constructor(marine) {
        this.marine = marine;
        this.marine.setScale(1);
        this.speed = Settings.MOVEMENT_UNIT;
    }

    moveRight() {
        this.marine.flipX = false;
        this.marine.x += this.speed;
    }

    moveLeft() {
        this.marine.flipX = true;
        this.marine.x -= this.speed;
    }
}