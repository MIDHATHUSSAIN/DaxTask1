const Blogs = require('../Models/BlogSchema')

const CreateBlog = async(req,res)=>{

    try {

        const {name,content,image} = req.body
                  
        await Blogs.create({name,content,image})
        
        res.status(201).json({message: "User Created"})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const GetBlogs = async (req,res)=>{
    try {
        const Alllogs = await Blogs.find()

         res.status(200).json(Alllogs)

        
    } catch (error) {
         
        res.status(500).json({message:error.message})
    }
    
}

const GetOneBlog = async(req,res)=>{

    try {

        const {id} = req.params.id
        const BlogbyId = await Blogs.findOne(id)
        res.status(200).json(BlogbyId)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const UpdateBlog = async (req,res)=>{

    try {
        const id = req.params.id
        const updateData = req.body
        await Blogs.findOneAndUpdate({_id: id},updateData,{new :true})
        res.status(200).json({message: "User Updated"})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const DeleteBlog = async (req,res)=>{

    try {
        const id = req.params.id
        await Blogs.findByIdAndDelete({_id:id})
        res.status(204)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {CreateBlog , GetBlogs , GetOneBlog ,UpdateBlog , DeleteBlog}