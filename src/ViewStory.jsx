import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'

 export default function ViewStory() {
  const {id,tot}= useParams();
  const[story,setStory]= useState(null);

  const navigate= useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:4000/story/${id}`)
    .then(response=>response.json())
    .then(data=>setStory(data)).catch(error=>console.log(error))
  },[id]);

  useEffect(()=>{
    if(id>tot||id <= 0){
    navigate('/');
   }

  })
  
   
  return (
    <div>
      {story? <div className='d-flex justify-content-center align-items-center'>
        <Link to={`/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill"></i></Link>
        <img className="vh-100 "src={story.imageUrl} alt='story'/>
        <Link to={`/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
      </div>: <div>Loading</div>}
      </div>
  )
}

