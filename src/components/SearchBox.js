import React from 'react'
import InputComponent from './InputComponent'

const SearchBox = () => {
  return (
    <div className="search-nav">
      <InputComponent type='search' placeholder='search' />
    </div>
  )
}

export default SearchBox