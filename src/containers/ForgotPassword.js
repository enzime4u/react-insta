import React from 'react'
import InputComponent from '../components/InputComponent'
import FormTitle from '../components/FormTitle'
import Button from '../components/Button'
import { Link } from 'react-router-dom'



const ForgotPassword = props => {
  return (
    <div className='forgot-password-container'>
      <FormTitle name='Forgot Password' />
      <h4>Please enter your registred email</h4>
      <InputComponent title='email: ' placeholder='enter email address' type='email'/>
      <div className="buttons-group">
        <Button title='Submit' />
        <Link to='/'>
          <Button title='Cancel' /> 
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword