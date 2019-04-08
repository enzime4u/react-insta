import React from 'react'
import PostHeader from '../components/PostHeader'
import PostImage from '../components/PostImage'
import Caption from '../components/Caption'


const PostContainer = props => {
  const { postData } = props  
    return (
    <div className='post-container'>
      <PostHeader profileImage={postData.profile_image} name={postData.name} />  
      <PostImage uploadImage={postData.upload_image} />
      <Caption />
      <hr/>
    </div> 
   )
}


export default PostContainer

