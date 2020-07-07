class Matrix{

  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.data = [];

    for(let i = 0; i < this.rows; i++){
      this.data[i] = [];
      for(let j = 0; j < this.columns; j++){
        this.data[i][j] = 0;
      }
    }
  }

  map(fn){

    console.log('wer are in map')
      //scalar product
      for(let i = 0; i < this.rows; i++){
        for(let j = 0; j < this.columns; j++){
          let value = this.data[i][j];
          this.data[i][j] = fn(value);
        }
      }
    }



  add(n){

  if(n instanceof Matrix){
    print("Matrix is input");
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.data[i][j] += n.data[i][j];
      }
    }
  }
  else{
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.data[i][j] += n;
      }
    }
  }


  }

  static multiply(a,b){

    if(a.rows != b.columns){
      console.log('Columns of A must match Rows of B')
      return undefined;
    }


    if(a instanceof Matrix && b instanceof Matrix){

      print("successful multiply of matricies")
      let result = new Matrix(a.rows, b.columns);

      for(let i = 0; i < result.rows; i++){
        for(let j = 0; j < result.columns; j++){
          let sum = 0;
          for(let k = 0; k < a.columns; k++){
              sum += a.data[i][k] * b.data[k][j];
          }
          result.data[i][j] = sum;

        }
      }
      return result;
    }
  }

  multiply(n){

      //scalar product
      for(let i = 0; i < this.rows; i++){
        for(let j = 0; j < this.columns; j++){
          this.data[i][j] *= n;
        }
      }
    }


  randomize(){
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        this.data[i][j] = Math.floor(Math.random() * 10 );
      }
    }
  }

  transpose(){
    let result = new Matrix(this.columns, this.rows)

    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.columns; j++){
        result.data[j][i] = this.data[i][j];
      }
    }
    return result;
  }

  print(){
    console.table(this.data)
  }
}
