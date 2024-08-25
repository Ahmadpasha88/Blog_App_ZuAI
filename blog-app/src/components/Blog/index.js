import React from "react";
import { FaEye } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import "./index.css";
import { useNavigate } from "react-router-dom";
const Blog = ({data}) => {
  

  const navigate = useNavigate();

  const openBlog = () => {
    navigate(`/posts/${data.id}`);
  };

  return (
    <div className="col-11 col-md-8 col-lg-3 p-0 m-auto border border-2 rounded-3 border-warning blogCardBg p-2 row">
      
        <div className="col-12 mb-2" style={{ height: "200px" }}>
          <img
            src={data.image_url}
            alt={data.title}
            className="w-100 h-100 posterImage"
          />
        </div>
        <h3 className="fw-bold text-white text-center">
          {data.title}
        </h3>
        <p className="text-white-50">{data.content}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-white-50">
            <FaEye className="text-white-50 fs-5 bg-transparent" /> 1k views
          </span>
          <button className="btn border fw-bold viewBlogBtn" onClick={openBlog}>
            Read Blog
          </button>
          <span className="text-white-50">
            <AiOutlineLike className="text-white-50 fs-5 bg-transparent" /> 800 Likes
          </span>
        </div>
    
 
    </div>
  );
};

export default Blog;
