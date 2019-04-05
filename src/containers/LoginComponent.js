import React from 'react'
import { Link } from 'react-router-dom'
import FormTitle from '../components/FormTitle'
import InputComponent from '../components/InputComponent'
import Button from '../components/Button'

const LoginComponent = () => {
  return (
    <div className='login-container'>
      <FormTitle name='Login' />
      <InputComponent title='username: ' />
      <InputComponent title='password :' type='password' />
      <div className='buttons-group'>
        <Link to='/'>
          <Button title='Log In' />
        </Link>
        <Link to='/register'>
          <Button title='Register' />
        </Link>
        <Link to='/forgot-password'>
          <Button title='Forgot Password' />
        </Link>
      </div>
    </div>
  )
}

export default LoginComponent