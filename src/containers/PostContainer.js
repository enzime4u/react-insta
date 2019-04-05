import React from 'react'
import PostHeader from '../components/PostHeader'


const Post = props => {
  const {postData} = props
  return (
    <div>
      <PostHeader name={postData.name} />
      
    </div>
  )
}


export default Post
