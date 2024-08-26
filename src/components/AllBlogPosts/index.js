import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import BlogCard from "../BlogCard";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AllBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [deletedPostId, seteDeletedPostId] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handelNewPost = () => {
    navigate("/newBlog");
  };

  const onDelete = (id) => {
    seteDeletedPostId(id);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://blogerapi-zuai.onrender.com/api/posts/user",
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`, 
              "Content-Type": "application/json", 
            },
          }
        );

        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          setPosts([]); 
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts.");
      }
    };

    fetchPosts();
  }, [deletedPostId]);

  return (
    <div className="minHeight">
      <div className="row col-11 col-md-9 col-lg-5 m-auto my-3 border rounded-3 searchBar sticky-top">
        <input
          type="search"
          placeholder="search blogs ..."
          className="col-12 p-3 rounded-3 border"
        />
      </div>

      <div className="row m-0 p-0 gap-3 mt-5 mb-2">
        {error ? (
          <p className="text-center text-danger">{error}</p>
        ) : posts.length === 0 ? (
          <div className="text-center">
            <p className="text-center">
              You don't have any posts, start posting!
            </p>
            <button className="btn btn-primary my-3" onClick={handelNewPost}>
              New Post
            </button>
          </div>
        ) : (
          posts.map((post) => (
            <BlogCard key={post.id} data={post} onDelete={onDelete} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllBlogPosts;
