

class Perceptron{
    constructor(n , lr){
        this.weights = new Array(n);

        for(let i = 0; i < this.weights.length; i++){
            this.weights[i] = random(-1, 1);
        }
        this.lr = lr;
    }

    train(inputs, desired){

        let guess = this.feedforward(inputs);

        let error = desired - guess;

        for (let i = 0; i < this.weights.length; i++){
            this.weights[i] += this.lr * error * inputs[i];
        }
        
    }

    feedforward(inputs){
        let sum = 0;
        for(let i = 0; i < this.weights.length; i++){
            sum += inputs[i] * this.weights[i];
        }
        let output = this.sign(sum);

        return output;
    }

    sign(n){
        if(n > 0 ){
            return 1;
        }else{
            return -1;
        }
    }

    getWeights(){
        return this.weights;
    }


}
   

    

    

