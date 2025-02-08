const http = require('http')

const server = http.createServer((req,res)=>{
  
  console.log(req,'req');
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end("Hello NodeJs from Http Module")
  
})

const port = 3400


server.listen(port,()=>{
  console.log(`Server is Listening to port: ${port}`)
})
