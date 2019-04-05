import React from 'react'

const ProfilePicture = (props) => {
  return (
    <div className='profile-picture'>
      <img src={props.profile_image} alt=""/>
    </div>
  )
}


export default ProfilePicture