import React, { useEffect, useState } from 'react'
import './index.css'
import Blog from '../Blog'
import { TbSquareRoundedPlus } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const navigate = useNavigate();

  const handelNewBlogPostBtn=()=>{
      navigate('/newBlog');
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='minHeight'>

      <div className='row col-11 col-md-9 col-lg-5 m-auto my-3 border rounded-3 searchBar sticky-top'>
        <input type='search' placeholder='search blog, bolger name, category, topic ...' className='col-12 p-3 rounded-3 border' />
      </div>
      <button className='btn btn-primary py-0 px-2 pb-1 fs-2 fw-bold newPostBtn' onClick={handelNewBlogPostBtn}>
        <TbSquareRoundedPlus className='m-0 p-0' />
      </button>
      <div className='row m-0 p-0 gap-3 mt-5 mb-2'>
      {posts.map(post => ( <Blog key={post.id} data={post}/>
        ))}
       
      </div>

    </div>
  )
}

export default Home
