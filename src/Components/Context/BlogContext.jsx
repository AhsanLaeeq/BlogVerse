import {  createContext,useState,useEffect } from "react";


export const BlogContext = createContext ();
export const BlogProvider = ({children}) => {
   const [st, setst] = useState(true);

 const [Blog, setBlog] = useState(()=>{

  const savedblog= localStorage.getItem("myblog");
  return savedblog? JSON.parse(savedblog):[];

 })

 const addblog =(NewBlog)=>{
     setBlog((preBlog)=>[...preBlog,NewBlog]);

 };


 const deleteblog=(inb)=>{
    setBlog((prev)=>prev.filter((_,i) =>i!==inb));
 }



 

  useEffect(() => {
  
   localStorage.setItem("myblog",JSON.stringify(Blog));
    
    
  }, [Blog])
  




    return (

    <BlogContext.Provider value ={{addblog,Blog,deleteblog,setst,st}}>

        {children}
    </BlogContext.Provider>
         
    )

}