import React from 'react'
import ProfilePicture from './ProfilePicture'
import data from '../data';

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