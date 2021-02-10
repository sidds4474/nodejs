// Callback is an asynchronous equivalent for a function.A Callback
// function is called at completion of given task. Nodejs makes 
// heavy use of callbacks.

// eg. Reading a file
// web that uses update type feature 

//Snippet-1
let fs= require('fs')

let data =fs.readFileSync('example.txt') //running sync

console.log(data.toString())
console.log('Program ended')

fs.readFile('example.txt',(error,data)=>{ //running async
  if(error) return console.log(error)
  console.log(data.toString())
})

console.log('Program ended 1')