class Raindrop {
    constructor() {
        this.x = random(width);
        this.y = random(-500, -25);
        this.z = random(0, 15);
        this.yspeed = map(this.z, 0, 15, 4, 10);
        this.len = map(this.z, 0, 15, 10, 20);
        this.fall = function () {
            this.y += this.yspeed;
            if (this.y > height) {
                this.y = random(-200, -50);
                this.yspeed = map(this.z, 0, 15, 4, 10);
            }
        };
        this.show = function () {
            var thick = map(this.z, 0, 15, 1, 5);
            strokeWeight(thick);
            var a = random(0,255);
            var b = random(0,255);
            var c = random(0,255);
            stroke(a, b, c);
            line(this.x, this.y, this.x, this.y + this.len);
        };
    }
}
