import React from 'react'
import Post from './Post'

const Feed = ({ post }) => {
  return (
    <>
    {
      post.map(  post=> (<Post key={post.id} post={post}/>)
    )
    }
    </>
  )
}

export default Feed