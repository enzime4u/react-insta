import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons'


const likeSign = <FontAwesomeIcon icon={faHeart} />
const commentSign = <FontAwesomeIcon icon={faComment} /> 
const shareSign = <FontAwesomeIcon icon={faShare} />

const SocialButtons = () => {
  return (
    <div className='social-buttons'>
      <span className='btn-social'>{likeSign}</span>
      <span className='btn-social'>{commentSign}</span>
      <span className='btn-social'>{shareSign}</span>
   </div> 
  )
}

export default SocialButtons