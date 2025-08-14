import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {
  useEffect(()=>{
    fetch('http://localhost:4000/story')
    .then(response=>response.json())
    .then(data=>setStories(data))
    .catch(error=>console.log(error))
  },[]);

  const [stories,setStories]= useState([]);
  const navigate= useNavigate();
  let tot=0;

  return (
    <div className=' story d-flex '>
    <div className='d-none'> {tot=stories.length}</div>  

      {stories.length >0 ?( stories.map((story)=>
      <div key={story.id} className='mx-1' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
        <div className='gradient-border'>
         <img  className="story-dp rounded-circle"src={story.profilePic} alt='dp' />
         </div>
         <p className='text-truncate' style={{width:'50px'}}>{story.username}</p> </div>)) : (<p>loading</p>)}
    </div>
  )
}

export default Stories