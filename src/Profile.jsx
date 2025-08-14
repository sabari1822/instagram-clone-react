import React, { useEffect, useState } from 'react'
import axios from 'axios'

 export default function Profile() {

  const[profile,setProfile]= useState(null);
  const[followers,setFollowers]= useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/profile')
    .then(response=> setProfile(response.data))
    .catch(error=>console.log(error))

    axios.get('http://localhost:4000/followers')
    .then(response=> setFollowers(response.data))
    .catch(error=>console.log(error))
    
  },[])

  function HandleOnChange(e){
    setProfile(prev=>({
      ...prev,[e.target.name]: e.target.value
    }))


  }

  const handleUpdate = async()=>{
       axios.put('http://localhost:4000/profile',profile)
       .then(console.log('updated'))
       .catch(error=>console.log(error))
    }

    const handleUnfollow= async (id)=>{
      try{
       await axios.delete(`http://localhost:4000/followers/${id}`);
       setFollowers(prev => prev.filter(f => f.id !== id));
       setTimeout(() => {
        alert('Unfollowed');
        
       },50); 

      }

    
  
  
  catch(error){
    console.log(error);
  }}

  return (
    <div>
      {profile? (
        <div className='m-5' > 
          <img src={profile.profilePic} className=' profile rounded-circle'></img>
          <h5>{profile.username}</h5>
          <input type='text' value= {profile.username} name='username' className='form-control my-4' onChange={HandleOnChange}></input>
          <input type='text' name='profilePic' value={profile.profilePic}className='form-control'onChange={HandleOnChange}></input>
          <button className='btn btn-primary my-4' onClick={handleUpdate}>Update</button>
          
          
          
           </div>
      )
      

    
      

      : (
        <div> loading profile

        </div>
      )
    }
    {followers.length >0 ?(
      followers.map(follower=>(
        <div key ={follower.id} className='d-flex'>{follower.username}
        <button className='btn btn-secondary ms-auto my-2' onClick={()=>handleUnfollow(follower.id)}>Unfollow</button>
        </div>
        
      ))

    ):(
      <p>loading followers</p>
    )}
    </div>
  )
}