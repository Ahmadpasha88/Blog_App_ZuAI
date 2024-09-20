import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
const Blog = ({ data }) => {
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
      <h3 className="fw-bold text-white text-center">{data.title}</h3>
      <p className="text-white-50">
        {data.content.length > 20
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </p>
      <div className="text-center">
        <button className="btn border fw-bold viewBlogBtn" onClick={openBlog}>
          Read Blog
        </button>
      </div>

      <p className="mb-0 mt-3">
        Published Date: {new Date(data.createdAt).toLocaleDateString()}
      </p>
      <p>
        Published Time:{" "}
        {new Date(data.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
    </div>
  );
};

export default Blog;
