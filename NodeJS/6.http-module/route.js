const http = require('http');

const server = http.createServer((req,res)=>{

  const url = req.url;
  if(url=== '/'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Home Page')

  }else if(url === '/projects'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Projects Page')

  }else{
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.end('Page is not Found')
  }

})

const port = 3400

server.listen(port,()=>{
  console.log(`server is listening to port: ${port}`)
})