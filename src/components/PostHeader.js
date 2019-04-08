import React from 'react'
import ProfilePicture from './ProfilePicture'


const PostHeader = props => {
  const { profileImage, name } = props
  return(
    <div>
      <ProfilePicture  profile_image={profileImage}/>
      <span>{name}</span>
    </div>
     
  )
}
export default PostHeader