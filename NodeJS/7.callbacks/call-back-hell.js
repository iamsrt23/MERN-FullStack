const fs = require('fs')

fs.readFile('index.txt','utf8',(err,data)=>{
  if(err){
    console.error("Error reading File",err)
    return
  }

  const modifyFileData = data.toUpperCase()
// 1
  fs.writeFile('output.txt',modifyFileData,(err)=>{
    if(err){
      console.error("Error writing File",err)
      return
    }
    console.log('data written to new file')
    // 2
    fs.readFile('output.txt','utf8',(err,data)=>{
      if(err){
        console.error("Error reading File",err)
        return
      }
      console.log(data)
    })
  })


})