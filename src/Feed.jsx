import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feed() {
  return (
    <div>
      <div><Stories></Stories></div>
      <div><Posts></Posts></div>
    </div>
  )
}

export default Feed