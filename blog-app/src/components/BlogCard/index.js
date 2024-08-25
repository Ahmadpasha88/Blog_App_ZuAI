import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = () => {

    const navigate =useNavigate();

    const handelBlogBtn=()=>{
       navigate('/posts/1')
    }

    const handelUpdateBtn=()=>{
        navigate('/updateBlog')
    }

    const handelDeleteBtn =()=>{
        alert('deleted');
    }

  return (
    <div className='border border-1 col-11 m-auto rounded-3 mb-3 bg-dark text-white'>
    <h4 className='fw-bold text-center fs-5 mt-3'>Short Story Of Gandhi</h4>
    <p className='fw-bold'>Views: <span className='fs-5'>1k</span></p>
    <p className='mb-0'>Published Date: 18-08-24</p>
    <p>Published Time: 8:50pm</p>
    <div className='d-flex flex-wrap gap-2 mb-2'>
    <button className='btn bg-white text-dark-emphasis' onClick={handelBlogBtn}>View Blog</button>
    <button className='btn bg-white text-dark-emphasis' onClick={handelUpdateBtn}>Modify</button>
    <button className='btn bg-white text-dark-emphasis' onClick={handelDeleteBtn}>Delete</button>
    </div>
</div>
  )
}

export default BlogCard
