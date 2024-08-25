import React from 'react'

const UpdateBlog = () => {
  return (
    <div>
       <div className='row gap-2 col-12 m-auto shadow-sm p-2 rounded-3'>
          <div className='col-12 col-lg-6 m-auto'>
            <h5 className='fw-bold text-white text-center fs-5'>Update Blog</h5>
            <label className='newsLabel'>Blog Headline</label>
          <input type='text' placeholder='Enter Blog Headline' className='col-12 p-3 border rounded-2 mb-2' />
             <label className='newsLabel'>Photo</label>
            <input type='file' className='col-12 p-2 border rounded-2 mb-2 text-dark bg-white' />
        
            <label className='newsLabel'>Write Blog</label>
            <textarea className='col-12 p-3 rounded-2' rows='6' placeholder='Write blog here'></textarea>
            <div className='row m-auto col-12 gap-1 align-items-center'>
            <input type='text' placeholder='Add Tags' className='mb-2 col-9 fs-6 p-2 rounded-2' /><button className='col-2 bg-white text-dark fw-medium rounded-2 h-100'>Add</button>
            </div>
            <div className='text-white'>
              <p>tags</p>
            </div>
          </div>

          <div className='col-12 col-lg-5 m-auto border rounded-2 text-white'>
            <p>images</p>
            </div>
            <button className='btn bg-white text-dark col-4 m-auto'>Update Blog</button>
        </div>
      
    </div>
  )
}

export default UpdateBlog
