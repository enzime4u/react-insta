import React from 'react'
import data from '../data'

const ProfilePicture = (props) => {
  const { profile_image } = props
  console.log(profile_image)
  return (
      <img src={profile_image} alt='profile pic'/>
  )
}


export default ProfilePicture