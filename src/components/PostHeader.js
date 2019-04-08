import React from 'react'
import ProfilePicture from './ProfilePicture'
import data from '../data';

const PostHeader = props => {
  const { profileImage } = props
  console.log(profileImage)
  return(
    <div>
      <ProfilePicture  src={profileImage}/>
    </div>
     
  )
}
export default PostHeader