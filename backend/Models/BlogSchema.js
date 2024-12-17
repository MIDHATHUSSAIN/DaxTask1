
const mongoose = require ('mongoose')

const BlogSchema = new mongoose.Schema({

    name: {
    type :String ,
    required : true
    },
    content: {
        type :String ,
        required : true
    },
    image: {
         type :String ,
         required : true
    },
})

const Blogs = mongoose.model('Blogs',BlogSchema)
module.exports = Blogs

