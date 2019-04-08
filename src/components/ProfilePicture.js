import React from 'react'

const ProfilePicture = (props) => {
  const { profile_image } = props;
  return (
      <img className='profile-picture' src={profile_image} alt='profile pic'/>
  )
}


export default ProfilePicture