const express=require('express')

const app=express()

//get request
app.get('/',(req,res)=>{
  // res.send('First Express app')
  res.send ('<a href="/sid">Click me<a>')
})

app.get('/sid',(req,res)=>{
  res.send('<h1>Sid"s Page</h1>')
})

//this code doesn't run on terminal. Listen on a port.

app.listen(3000,()=>{
  console.log('Server started')
})
