function add(a,b){
  return a+b
}

function substract(a,b){
  return a-b
}

function divide(a,b){
  if(b==0){
    throw new Error('Divide by zero not allowed')
  }
}


module.exports = {add,substract,divide}