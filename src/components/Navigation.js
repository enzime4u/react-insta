import React from 'react'

import Identity from './Identity'
import SearchBox from './SearchBox'

const Navigation = () => {
  return (
      <div className='navigation-items'>
        <Identity />
        <SearchBox />
      </div>
  )
}

export default Navigation