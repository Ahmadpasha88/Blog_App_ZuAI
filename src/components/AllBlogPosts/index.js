import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import BlogCard from "../BlogCard";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';

const AllBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [deletedPostId, seteDeletedPostId] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); 

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
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts.");
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [deletedPostId]);


  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="minHeight">
      {isLoading ? (
        <div className="d-flex justify-content-center mt-5">
          <TailSpin
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <>
          <div className="row col-11 col-md-9 col-lg-5 m-auto my-3 border rounded-3 searchBar sticky-top">
            <input
              type="search"
              placeholder="Search blogs ..."
              className="col-12 p-3 rounded-3 border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>

          <div className="row m-0 p-0 gap-3 mt-5 mb-2">
            {error ? (
              <p className="text-center text-danger">{error}</p>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center">
                <p className="text-center">
                  You don't have any posts, start posting!
                </p>
                <button className="btn btn-primary my-3" onClick={handelNewPost}>
                  New Post
                </button>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <BlogCard key={post.id} data={post} onDelete={onDelete} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllBlogPosts;
