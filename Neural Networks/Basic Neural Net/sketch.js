/*var brain;

function setup(){

  brain = new NeuralNetwork(3, 3, 1);

}

function draw(){

}
*/


function setup(){
  let a = new Matrix(2,3);
  //let b = new Matrix(3,2)

  function doubleIt(x){
    return x * 2;
  }

  a.randomize()
  a.print()
  let b = a.transpose()
  b.print()
  //b.randomize()

  b.map(doubleIt)
  b.print()
  //let c = a.multiply(b);
//  print(c)
//  console.table(c.matrix)

}
