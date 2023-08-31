const express = require("express")
const app = express()
app.get("/",(req,res)=>{
  res.send({
    message:"heda vore kabo heda vore hagbo"
  })
})
app.listen(port,()=>{
    console.log("the backend hitting the url path",port);
})