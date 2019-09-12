function Ball(){
    this.x = random(width);
    this.y = random(height);

    this.flag = false;


    this.show = function(){
        stroke(255);
        strokeWeight(4);
        ellipse(this.x, this.y, 5)

    }


    this.gravity = function(){

        if(this.y < height && this.flag == false){
            this.fall();
        }else{
            this.flag = true;
            this.rise();
        }

        if(this.y < height/ 5){
            this.flag = false;
        }
    }
    this.fall = function(){
        this.y += 10;

        
    }

    this.rise = function(){
        this.y -= 10;
         

    }
}