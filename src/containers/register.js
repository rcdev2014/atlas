import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { createUser } from '../redux/user/userActions'

import CommonInput from '../common/CommonInput'
import CommonButton from '../common/CommonButton'
import CommonMessageNotif from '../common/CommonMessageNotif'

const Register = () => {
  const dispatch = useDispatch()
  const userState = useSelector(state => state.user)

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const [userValidation, setUserValidation] = useState({
    email: false,
    password: false
  })

  const handleChange = event => {
    const { name, value } = event.target

    setUserData({ ...userData, [name]: value })
  }

  const handleCreateUser = () => {
    if (userData.email.length === 0 && userData.password.length === 0) {
      setUserValidation({
        ...userValidation,
        email: true,
        password: true
      })
    } else {
      dispatch(createUser(userData))
    }
  }

  return (
    <div className="form-container primary">
      <h1 className="form-heading">Atlas</h1>
      <div className="form-box">
        <div className="form-title">Register</div>
        <Form className="form-holder">
          <CommonInput
            error={userValidation.email}
            errorContent="Please enter your email address"
            type="text"
            label="Email Address"
            placeholder="Email Address"
            name="email"
            className="form-input"
            value={userData.email}
            onChange={event => handleChange(event)}
          />
          <CommonInput
            error={userValidation.password}
            errorContent="Please enter your password"
            type="password"
            label="Password"
            placeholder="Password"
            name="password"
            className="form-input"
            value={userData.password}
            onChange={event => handleChange(event)}
          />
          <CommonButton
            type="submit"
            btnText="Sign up"
            className="form-button"
            onClick={handleCreateUser}
          />
          <CommonMessageNotif
            hidden={!userState.created}
            header="Success!"
            content="You can login now using your account."
          />
        </Form>
        <div className="form-info">
          <Link to="/" className="form-link">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
