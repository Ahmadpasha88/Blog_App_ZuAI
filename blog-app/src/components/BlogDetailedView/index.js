import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import axios from "axios";
import "./index.css";
import BlogComments from "../BlogComments";
import { useParams } from "react-router-dom";

const BlogDetailedView = () => {
  const { id } = useParams(); 
  const [blogPost, setBlogPost] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`); // Fetch the blog post data
        console.log(response)
        setBlogPost(response.data); 
        setLoading(false); 
      } catch (err) {
        setError(err); 
        setLoading(false);
      }
    };

    fetchBlogPost(); 
  }, [id]); 

  if (loading) return <p>Loading...</p>; 
  if (error) return <p>Error: {error.message}</p>; 

  if (!blogPost) return null; 
  const { title, image_url, content, author, createdAt } = blogPost;

  const paragraphs = content.split("\n\n").filter(paragraph => paragraph.trim() !== "");

  return (
    <div className="py-2 py-lg-5 minHeight">
      <div className="bg-white p-3 rounded-3 col-12 col-lg-10 m-auto">
        <div className="row col-10 col-md-9 col-lg-8 m-auto rounded-2">
          <img
            src={image_url}
            alt={title}
            className="w-100 blogImage"
            style={{ maxHeight: "40vh" }}
          />
        </div>
        <div className="row text-dark bg-white">
          <h3 className="text-center fw-bold fs-2 my-3">{title}</h3>
          <div className="mt-3 text-dark-emphasis fw-light">
            <p className="mb-0">date: {createdAt}</p>
            <p className="mb-0 d-flex align-items-center flex-wrap gap-2">
              Written by:{" "}
              <div className="d-flex align-items-center mb-0">
                <p className="mb-0">{author}</p>
                <p className="mb-0 mx-2">
                  <span className="fw-medium fs-5">12k</span> Followers
                </p>
              </div>{" "}
              <button className="btn btn-dark border">Follow</button>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-dark bg-transparent">
              <FaEye className="fs-5" /> 1k views &nbsp;{" "}
              <button className="btn border">Share <IoMdShareAlt /></button>
            </span>
            <span className="aligin-items-center">
              <AiOutlineLike className="text-primary fs-3" role="button" /> 800 Likes
            </span>
          </div>
          <div className="text-wrap">
            {paragraphs.map((paragraph, index) => (
              <p className="fw-medium text-dark-emphasis lh-lg" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
         
        </div>
        <div>
          <BlogComments />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailedView;
