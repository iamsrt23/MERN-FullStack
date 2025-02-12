const EventEmitter = require('events')



const myFirstEmitter = new EventEmitter();


// register a Listener

myFirstEmitter.on('greet',(name)=>{
  console.log(`Hello ${name}`)
})

myFirstEmitter.emit('greet','raviteja')