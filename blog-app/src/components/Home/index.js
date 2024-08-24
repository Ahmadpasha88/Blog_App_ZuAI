import React from 'react'
import './index.css'
import Blog from '../Blog'
import { TbSquareRoundedPlus } from "react-icons/tb";

const Home = () => {
  return (
    <div className='minHeight'>

     <div className='row col-11 col-md-9 col-lg-5 m-auto my-3 border rounded-3 searchBar sticky-top'>
        <input type='search' placeholder='search blog, bolger name, category, topic ...' className='col-12 p-3 rounded-3 border' />
      </div>
     <button className='btn btn-primary py-0 px-2 pb-1 fs-2 fw-bold newPostBtn'>
     <TbSquareRoundedPlus className='m-0 p-0'/>
     </button>
<div className='row m-0 p-0 gap-3 mt-5 mb-2'>   
  <Blog/>
  <Blog/>
  <Blog/>
  <Blog/>
  <Blog/>

</div>

      
    </div>
  )
}

export default Home
