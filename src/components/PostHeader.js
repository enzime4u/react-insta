import React from 'react'
import ProfilePicture from './ProfilePicture'
import data from '../data';

const PostHeader = props => {
  const { profile_image } = props
  console.log(profile_image)
  return(
    <div>
      <ProfilePicture  src={profile_image}/>
    </div>
     
  )
}
export default PostHeader