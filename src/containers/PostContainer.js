import React from 'react'
import PostHeader from '../components/PostHeader'
import data from '../data'


const Post = (props) => {
  const { postData } = props
  console.log(postData)
    return (
    <div>
      <PostHeader name={postData.name} />   
    </div> 
   )
}


export default Post


