import React from 'react'

const PostImage = (props) => {
  const { uploadImage } = props 
  return(
    <img src={uploadImage} alt="uploaded pic"/>
  )
}

export default PostImage