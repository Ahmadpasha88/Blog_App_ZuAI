import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const BlogCard = ({ data, onDelete }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handelBlogBtn = () => {
    navigate(`/posts/${data.id}`);
  };

  const handelUpdateBtn = () => {
    navigate(`/updateBlog/${data.id}`);
  };

  const handleDeleteBtn = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/posts/${data.id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
      });
      if (onDelete) {
        onDelete(data.id); // Notify parent component about the successful deletion
      }
    } catch (error) {
      setError("Failed to delete the blog post.");
      console.error("Error deleting blog post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-1 col-11 m-auto rounded-3 mb-3 bg-dark text-white">
      <h4 className="fw-bold text-center fs-5 mt-3">{data.title}</h4>
      <p className="mb-0">
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
      <div className="d-flex flex-wrap gap-2 mb-2">
        <button
          className="btn bg-white text-dark-emphasis"
          onClick={handelBlogBtn}
        >
          View Blog
        </button>
        <button
          className="btn bg-white text-dark-emphasis"
          onClick={handelUpdateBtn}
        >
          Modify
        </button>
        <button
          className="btn bg-white text-dark-emphasis"
          onClick={handleDeleteBtn}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </button>
      </div>
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default BlogCard;
