import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [content, setcontent] = useState("");
  const [image, setimage] = useState("");
  const [Blogs, setblogs] = useState();
  const [Update, setUpdate] = useState(false)

  useEffect(() => {
    async function GetBlogs() {
      try {
        const Blogs = await axios.get("http://localhost:8000/create");
        console.log(Blogs.data);

        setblogs(Blogs.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    GetBlogs();
  }, []);
  async function BlogCreator(e) {
    e.preventDefault();
     try {
         
      // const formData = new FormData()
    // formData.append('name',name)
    // formData.append('content',content)
    // formData.append('image',image)

    await axios.post("http://localhost:8000/create", { name, content, image });
     } catch (error) {
        console.error(error.message)
     }
    
  }
  async function UpdateBlog(id) {
      
    try {
         
      // const formData = new FormData()
    // formData.append('name',name)
    // formData.append('content',content)
    // formData.append('image',image)

    await axios.patch(`http://localhost:8000/create/${id}`, {
      name,
      content,
      image,
    });
    } catch (error) {
      console.error(error.message)
    }
    
  }
  async function DeleteBlog(id) {
    try {
      await axios.delete(`http://localhost:8000/create/${id}`);
      
    } catch (error) {
      console.error(error.message)
    }
   
  }


  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center mt-12 mb-12">
        <h2 className="text-[2rem] font-extrabold">Create Blog</h2><br/>
        <input
          type="text"
          placeholder="name"
          value={name}
          required
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="content"
          required
          value={content}
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => {
            setcontent(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="image"
          value={image}
          required
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => {
            setimage(e.target.value);
          }}
        /><br/>
        <button className="btn btn-accent w-[20rem]" onClick={BlogCreator}>
          Create Blog
        </button>
      </div>
      <div>
      <h1 className=" text-center text-[4rem] font-extrabold ">All Blogs</h1>
      </div><br/>
      <div className="flex justify-evenly items-center sm:flex-wrap lg:flex-nowrap">
        
        {Blogs &&
          Blogs.map((p) => (
            <div key={p._id} className="flex justify-evenly">
              <div className="mr-4 mt-4">
                <p>Name : {p.name}</p>
                <p className="mt-4">Content : {p.content}</p>
                <p className="mt-4">Image : {p.image}</p>
                <div className="flex mt-4">
                <button
                  className="btn btn-accent mr-4 sm:mb-[1rem]"
                  onClick={()=>{setUpdate(true)}}
                >
                  Update
                </button>
                <button
                  className="btn btn-accent"
                  onClick={() => {
                    DeleteBlog(p._id);
                  }}
                >
                  Delete
                </button>
                </div>
                
              </div>
              {Update? (<div className="mr-6">
                <h2 className="text-[1rem] font-extrabold text-center mb-2">{`Update ${p.name}'s Blog`}</h2>
                <input
                  type="text"
                  required
                  placeholder="name"
                  value={name}
                  className="input input-bordered w-full max-w-xs h-[2.5rem] mb-2"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
                <br />
                <input
                  type="text"
                  placeholder="content"
                  value={content}
                  required
                  className="input input-bordered w-full max-w-xs h-[2.5rem] mb-2"
                  onChange={(e) => {
                    setcontent(e.target.value);
                  }}
                />
                <br/>
                <input
                  type="text"
                  placeholder="image"
                  value={image}
                  required
                  className="input input-bordered w-full max-w-xs h-[2.5rem] mb-4"
                  onChange={(e) => {
                    setimage(e.target.value);
                  }}
                />
                <br/>
                <div className="flex">
                <button
                  className="btn btn-accent mr-4 sm:mb-[1rem]"
                  onClick={()=>{setUpdate(false)}}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-accent"
                  onClick={() => {
                    UpdateBlog(p._id);
                  }}
                >
                  Update
                </button>
                </div>

              </div>) : ""}
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
