import React from 'react'
import ProfilePicture from './ProfilePicture'

const PostHeader = (props) => {
  return(
    <div>
      <ProfilePicture />
      <div>
        <p>{props.name}</p>
      </div>
      
    </div>
  )
}

export default PostHeader