import React from 'react'

import InputComponent from '../components/InputComponent'

const FormFields = props => {
  return (
    <div>
      <InputComponent title='name: ' />
      <br/>
      <InputComponent title="username: " />
      <br />
      <InputComponent title="password: " type='password'/>
      
    </div>
  )
}

export default FormFields