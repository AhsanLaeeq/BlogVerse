
import { useContext } from 'react';
import { BlogContext } from '../Context/BlogContext';
import './Page.css';
import { useParams } from 'react-router-dom';

const Page = () => {

    const {Blog} =useContext (BlogContext);
    const {id} =useParams();
    const blog =Blog[id];
    if (!blog)
        return <p>No Blog Present</p>;
  
  return (
    <div className="center">
    <div className="page-wrapper">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
    </div>
  );
};

export default Page;
