import React from 'react'

import InputComponent from '../components/InputComponent';
import FormTitle from '../components/FormTitle'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='register-container'>
      <FormTitle name='Register' />
      <div>
        <InputComponent title='full name: ' />
        <InputComponent title='email: ' />
        <InputComponent title='password: ' />
      </div>
      
      <div className='buttons-group'>
        <Button title='Register' />
        <Link to='/'>
          <Button title='Cancel' />
        </Link>
      </div>
    </div>
  )
}


export default Register