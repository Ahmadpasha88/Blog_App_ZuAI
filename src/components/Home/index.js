import React, { useEffect, useState } from "react";
import "./index.css";
import Blog from "../Blog";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TailSpin } from 'react-loader-spinner';

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); 

  const handelNewBlogPostBtn = () => {
    navigate("/newBlog");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://blogerapi-zuai-1.onrender.com/api/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false); 
      }
    };

    fetchPosts();
  }, []);


  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="minHeight">
      <div className="row col-11 col-md-9 col-lg-5 m-auto my-3 border rounded-3 searchBar sticky-top">
        <input
          type="search"
          placeholder="Search blogs ..."
          className="col-12 p-3 rounded-3 border"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>
      <button
        className="btn btn-primary py-0 px-2 pb-1 fs-2 fw-bold newPostBtn"
        onClick={handelNewBlogPostBtn}
      >
        <TbSquareRoundedPlus className="m-0 p-0" />
      </button>

      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <TailSpin
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="row m-0 p-0 gap-3 mt-5 mb-2">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Blog key={post.id} data={post} />
            ))
          ) : (
            <p className="text-center">No posts found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
