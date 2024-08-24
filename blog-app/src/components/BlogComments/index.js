import React from 'react'
import { BsSendFill } from "react-icons/bs";

const BlogComments = () => {
  return (
    <div className='text-dark bg-transparent'>
      <h3 className='fw-bold text-decoration-underline'>Comments(0)</h3>
      <div className='my-3 p-2' style={{height:'50vh',overflowY:'scroll'}}>

        {/* <div className='text-center'>
          <p>Be a first commenter</p>
        </div> */}
        <div className='mb-2'>
          <p className='pb-0 mb-0'>name</p>
          <p className='text-dark-emphasis'>comment</p>
        </div>
        <div className='mb-2'>
          <p className='pb-0 mb-0'>name</p>
          <p className='text-dark-emphasis'>comment</p>
        </div>
        <div className='mb-2'>
          <p className='pb-0 mb-0'>name</p>
          <p className='text-dark-emphasis'>comment</p>
        </div>
        <div className='mb-2'>
          <p className='pb-0 mb-0'>name</p>
          <p className='text-dark-emphasis'>comment</p>
        </div>
        <div className='mb-2'>
          <p className='pb-0 mb-0'>name</p>
          <p className='text-dark-emphasis'>comment</p>
        </div>
        <div className='mb-2'>
          <p className='pb-0 mb-0'>name</p>
          <p className='text-dark-emphasis'>comment</p>
        </div>
        <div className='mb-2'>
          <p className='pb-0 mb-0'>name</p>
          <p className='text-dark-emphasis'>comment</p>
        </div>

      </div>
      <div className='bg-dark p-3 row'>
        <input type='text' placeholder='Post Your Comment' className='p-2 fs-6 fw-medium col-9 m-auto rounded-3'/>
        <button className='col-2 m-auto rounded-2 py-1 fw-bold'><BsSendFill className='fs-4'/></button>
      </div>
    </div>
  )
}

export default BlogComments
