const port = require("./Config/port")
const DbConnection = require("./Config/db")
const express = require('express')
const app = express()
const BlogRouter = require('./Router/Blog.Router')
app.use(express.json())
DbConnection()

app.use("/create",BlogRouter)

app.listen(port,(error)=>{

    if(error){

        console.log(error)
    }
    console.log(`app is running on ${port}`)

})