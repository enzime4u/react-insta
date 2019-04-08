import React from 'react'
import PostContainer from '../containers/PostContainer'
import data from '../data'



class Feed extends React.Component {
  render() {
    return (
      <div className='feed'>
        {data.map(post => <PostContainer postData={post}/>)}
      </div>
    )
  }
}

export default Feed