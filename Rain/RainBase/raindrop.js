class Raindrop {
    constructor() {
        this.x = random(width);
        this.y = random(-500, -25);
        this.z = random(0, 15);

        this.yspeed = map(this.z, 0, 15, 4, 10);
        this.xspeed = 1;
        this.len = map(this.z, 0, 15, 10, 20);
        
        this.fall = function () {
            this.y += this.yspeed;
            this.x += this.xspeed;
            if (this.y > height) {
                this.y = random(-200, -50);
                this.yspeed = map(this.z, 0, 15, 4, 10);
                this.x = random(width);
            }
        };
        this.show = function () {
            var thick = map(this.z, 0, 15, 1, 5);
            strokeWeight(thick);
            stroke(255);
            line(this.x, this.y, this.x, this.y + this.len);
        };
    }
}
