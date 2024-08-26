import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import BlogComments from "../BlogComments";
import { useParams } from "react-router-dom";
import {TailSpin} from 'react-loader-spinner';

const BlogDetailedView = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await axios.get(
          `https://blogerapi-zuai.onrender.com/api/posts/${id}`
        );
        console.log(response);
        setBlogPost(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (error) return <p>Error: {error.message}</p>;

  if (!blogPost) return null;
  const { title, image_url, content, name, createdAt } = blogPost;

  const paragraphs = content
    .split("\n\n")
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <div className="py-2 py-lg-5 minHeight">
      {loading?<div className="d-flex justify-content-center mt-5">
        <TailSpin
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>:
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
          <p className="mb-0">
            Published Date: {new Date(createdAt).toLocaleDateString()}
          </p>
          <p>
            Published Time:{" "}
            {new Date(createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <p className="mb-1 text-wrap">
            Written by: <span className="mb-0">{name}</span>
          </p>
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
        <BlogComments blogId={id} />
      </div>
    </div>
        }
      
    </div>
  );
};

export default BlogDetailedView;
