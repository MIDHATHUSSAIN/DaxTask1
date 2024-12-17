const express = require('express')
const router = express.Router()
const {CreateBlog,GetBlogs,GetOneBlog,UpdateBlog,DeleteBlog} = require('../Controller/Blog.Controller')

router.post("/" , CreateBlog)

router.get("/", GetBlogs)

router.get("/:id",GetOneBlog)

router.patch("/:id",UpdateBlog)

router.delete("/:id",DeleteBlog)

module.exports = router
