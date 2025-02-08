// module.exports --> export
// require --> import

const firstModule = require('./first-module')

console.log(firstModule.add(20,30))


try {

  console.log('trying to Divide by 0');
  let result = firstModule.divide(0,0) 
  console.log(result)
  
} catch (error) {
  console.log('Caught an Error',error.message) // 'Divide by zero not allowed'
  
}


// Module Wrapper

(
  function(exports,require,module,__filename,__dirname){}
  // your module code goes here
)