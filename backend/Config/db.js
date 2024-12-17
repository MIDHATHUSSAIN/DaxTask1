const mongoose = require('mongoose')
const dbURL = "mongodb://localhost:27017/BlogApp"

const DbConnection = async()=>{
    try {
        await mongoose.connect(dbURL)
    } catch (error) {
        console.log(error)
    }
}

module.exports = DbConnection