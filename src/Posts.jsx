import React, { useEffect, useState } from 'react'

function Posts() {

  const[posts,setPosts]= useState([]);

  useEffect(()=>{
     fetch('http://localhost:4000/posts')
    .then(response=>response.json())
    .then(data=>setPosts(data))
    .catch(error=>console.log(error))
  },[]);
    
    
  
   
   

return (
  <div className='d-flex justify-content-center'>
    {posts.length > 0 ? (
      <div>
        {posts.map((post) => (
          <div className='my-3' key={post.id}>
            <div className='d-flex'>
              <img className=' dp rounded-circle' src={post.profilePic} alt="Profile pic" />
              <h5>{post.username}</h5>
            </div>
            <img  className="image"src={post.imageUrl} alt="posts"></img>
            <div>
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-share"></i>
            </div>
            <div>
             <b>{post.likes} Likes</b> 
            </div>
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    ) : (
      <div>
        Loading posts
      </div>
    )}
  </div>
);
}

export default Posts