import React, { useState } from 'react'
import "./App.css"

function App(){
    var [blog,setBlog] = useState([])
    var [input,setInput] = useState("")

    function addBlog(){
        if(input.trim() === "") return;
        setBlog([...blog, input])
        setInput("")
    }

    function deleteBlog(myItem){
        var updatedBlog = blog.filter(item => item !== myItem )
        setBlog(updatedBlog)
    }

    function updateBlog(blogItem){
        var newBlog = prompt("Enter updated blog:", blogItem)
        if(newBlog && newBlog.trim() !== ""){
            var updatedBlog = blog.map(item =>
                item === blogItem ? newBlog : item
            )
            setBlog(updatedBlog)
        }
    }

    return(
        <div className="container">
            <h1 className="title">Blog Manager</h1>

            <div className="input-section">
                <input 
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)} 
                    type="text" 
                    placeholder="Write a new blog..."
                />
                <button className="add-btn" onClick={addBlog}>Add Blog</button>
            </div>


            <div className="blog-list">
                {
                    blog.map((item,index)=>(
                        <div className="blog-card" key={index}>
                            <p className="blog-text">{item}</p>
                            <div className="btn-group">
                                <button className="delete-btn" onClick={()=>deleteBlog(item)}>Delete</button>
                                <button className="update-btn" onClick={()=>updateBlog(item)}>Edit</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default App