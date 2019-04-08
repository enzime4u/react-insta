import React from 'react'
import PostHeader from '../components/PostHeader'
import data from '../data'


const PostContainer = props => {
  const { postData } = props
  console.log(props)
    return (
    <div>
      <PostHeader profileImage={postData.profile_image} name={postData.name} />   
    </div> 
   )
}


export default PostContainer