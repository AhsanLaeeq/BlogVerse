import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Hero.css";
import { useState } from "react";
import { BlogContext } from "../Context/BlogContext";

import ReactMarkdown from "react-markdown";

const Hero = () => {

  const {addblog,Blog,deleteblog,setst,st} =useContext(BlogContext);

    // const [st, setst] = useState(true);
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");

   const handleclick =()=>{
    if(!title || !content) return;
    const NewBlog ={title,content};
    addblog(NewBlog);
    settitle("");
    setcontent("");

   };

  return (
    <div className="hero-container">

        <>
{st ? (<button className="start-btn" onClick={()=>setst(false)}>Start Writing</button>) :



   (  
    
     <>
    <div className="hero-header">
        <h1>Welcome to BlogVerse</h1>
        <p>Start writing your thoughts and see the live preview below.</p>
      </div>

      <div className="editor-section">
    <input
  type="text"
  placeholder="Blog Title"
  value={title}
  onChange={(e) => settitle(e.target.value)}
  className="blog-title-input"
/>
        <textarea
          className="blog-input"
          placeholder="Write your blog post here..."
          value={content}
          onChange={(e)=>setcontent(e.target.value)}
          rows={5}
        ></textarea>

        <button className="add-blog-btn" onClick={handleclick}>Add Blog</button>

        <div className="preview-area">
          <h3>Live Preview</h3>
          <div className="preview-box">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>



      </div>
        </>
      )}

      </>

      <>
 
        <div className="showblogg">
          <h2>📚 All Blogs</h2>
           
           {Blog.length===0 && <p>No blogs yet.</p>}
           {Blog.map((blog,index)=>(

            <Link to={`/page/${index}`} key={index} className="showblog-link">
          
            <div className="showblog" key={index}>
              <h2>📚</h2>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
 
   
              
              

<button
  className="delete-blog-btn"
  onClick={(e) => {
    e.preventDefault();       // Stop the link from navigating
    e.stopPropagation();      // Stop bubbling to the Link
    deleteblog(index);        // Now safely delete the blog
  }}
>
  Delete Blog
</button>

            </div>
         
  </Link>
            
            
            

           ))

           }

           


        </div>


    </>
    
    </div>
  );
};



export default Hero;
