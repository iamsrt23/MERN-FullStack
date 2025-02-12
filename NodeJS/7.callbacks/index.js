
const fs = require('fs')


function person(name,callbackFn){

  console.log(`Hello ${name}`)
  callbackFn()
}

function address(){
  console.log('Address')
}


person('raviteja',address)

fs.readFile('index.txt','utf8',(err,data)=>{
  if(err){
    console.error('Error reading file',err)
    return
  }
  console.log(data)
})