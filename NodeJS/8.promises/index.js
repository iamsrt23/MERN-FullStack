function delayFn(time){
  return new Promise((resolve)=>setTimeout(resolve,time))
}

console.log("Promise Lecture Starts")
delayFn(2000).then(()=>console.log('after 2 seconds promise resolved'))
console.log('end');


// Error handling

function divideFn(num1,num2){
  return new Promise((resolve,reject)=>{
    if(num2===0){
      reject('Can not Perform Divisable by zero')
    }else{
      resolve(num1/num2)
    }
  })
}

divideFn(10,0).then((result)=>console.log(result,"res")).
catch((error)=>console.log(error,"err"))