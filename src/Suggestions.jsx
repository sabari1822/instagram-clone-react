import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Suggestions() {
  const [profile,setProfile]= useState(null);
  const[suggestions,setSuggestions]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/profile')
    .then(response=>response.json())
    .then(data=>setProfile(data))
    .catch(error=>console.log(error));

    fetch('http://localhost:4000/suggestions')
    .then(response=>response.json())
    .then(data=>setSuggestions(data))
    .catch(error=>console.log(error)); 
},[]);

const handleFollow= async(id,username)=>{
   axios.post('http://localhost:4000/followers',{'id':id, 'username':username})
      .then(()=>alert('Followed'))
      .catch(error=>console.log(error))
      

}

const handleUnfollow= async (id)=>
  axios.delete(`http://localhost:4000/followers/${id}`)
  .then(()=>alert('Unfollowed'))
  .catch(erro=>console.log(error))
     
    
  
  return (
    <div>
      <div className='suggestions m-4 '>
        {profile?
      <div className='d-flex'>
              <img className=' dp rounded-circle' src={profile.profilePic} alt="Profile pic" />
              <h5>{profile.username}</h5>
           <small className='ms-auto text-primary'>Switch</small>
            </div>
            : <p>loading</p>}
            <div className='d-flex'>
              <p>Suggested for you</p>
              <b className='ms-auto'>See all</b>
            </div>

            {suggestions.length > 0 ? (
      <div>
        {suggestions.map((suggestion) => (
          <div className='my-3' key={suggestion.id}>
            <div className='d-flex'>
              <div className=' my-2'>
              <img className=' dp rounded-circle' src={suggestion.profilePic} alt="Profile pic" />
              <h5>{suggestion.username}</h5>
              </div>
              <div onClick={()=> handleFollow(suggestion.id,suggestion.username)}className=' follow text-primary ms-auto'>Follow</div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>
        Loading..
      </div>
    )}
      </div>
      
    </div>
  )
}

export default Suggestions