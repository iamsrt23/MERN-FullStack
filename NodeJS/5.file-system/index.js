const fs = require('fs')
const path = require('path')


// create a Data Folder
const dataFolder = path.join(__dirname,"data");

if(!fs.existsSync(dataFolder)){
  fs.mkdirSync(dataFolder)
  console.log("Data Folder Created")
}

// Join the path 
const filePath = path.join(dataFolder,'example.txt')
// synchronous way of creating the file
fs.writeFileSync(filePath,"Hello From NodeJs")
console.log("File created Successfully")


// read content from file
const readContentFromFile = fs.readFileSync(filePath,'utf8')
console.log("File Content:",readContentFromFile)


// append another lines
fs.appendFileSync(filePath, '\n This is a new line added to that file')
console.log('New File content Added')


// Async Way

const asyncFilePath = path.join(dataFolder,'async-example.txt')

fs.writeFile(asyncFilePath,"Hello Async Nodejs",(err)=>{
  if(err) throw err;
  console.log('Async File Created Successfully')
})

fs.readFile(asyncFilePath,'utf8',(err,data)=>{
  if(err) throw err;
  console.log('Async File Content:',data)
  fs.appendFile(asyncFilePath,"\n This is another line added",(err)=>{
    if(err) throw err;
    console.log('New Async line Added ')

    fs.readFile(asyncFilePath,'utf8',(err,data)=>{
      if(err) throw err;
      console.log("Async File updated content:",data)
    })
  })
})