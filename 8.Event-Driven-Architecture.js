// Event Emiiter

// It emits the events

// Event Listener
// Listens event emitter

// Callback functions
// these are called for that specific event lsitener

let events =require('events')

//creating an event emitter
let eventEmitter=new events.EventEmitter();




eventEmitter.on('connection',()=>{ //listener
  console.log('Connection successful')
})

eventEmitter.emit('connection') //emitting comnnection
eventEmitter.emit('connections') //emitting comnnections



