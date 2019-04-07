import React from 'react'
import Post from '../containers/PostContainer'
import data from '../data'



class Feed extends React.Component {
  render() {
    return (
      <div className='feed'>
        {data.map(post => <Post postData={post}/>)}
      </div>
    )
  }
}

export default Feed