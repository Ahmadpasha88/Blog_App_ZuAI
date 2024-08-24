import React from "react";
import { FaEye } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import "./index.css";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();

  const openBlog = () => {
    navigate("/posts/1");
  };

  return (
    <div className="col-11 col-md-8 col-lg-3 p-0 m-auto border border-2 rounded-3 border-warning blogCardBg p-2 row">
      
        <div className="col-12 mb-2" style={{ height: "200px" }}>
          <span className="bg-warning text-white trendingFlag fw-bold px-2 rounded-2">
            Trending
          </span>

          <img
            src="https://th.bing.com/th/id/OIP.12iheflP9TjWhxxsagSfCwAAAA?rs=1&pid=ImgDetMain"
            alt="gandhi"
            className="w-100 h-100 posterImage"
          />
        </div>
        <h3 className="fw-bold text-white text-center">
          Short Story Of Gandhi..!
        </h3>
        <p className="text-white-50">This was the story of mahathma from starting of his birth to die</p>
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
        <div className="mt-3 d-flex justify-content-between flex-wrap">
          <p className="mb-0 text-white-50">date: 24-08-2024</p>
          <p className="text-white-50">Written by: Veera venkata narasimha rajulu</p>
        </div>
 
    </div>
  );
};

export default Blog;
