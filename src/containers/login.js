import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { loginUser } from '../redux/user/userActions'

import CommonInput from '../common/CommonInput'
import CommonButton from '../common/CommonButton'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

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

  const handleLoginUser = () => {
    if (userData.email.length === 0 && userData.password.length === 0) {
      setUserValidation({
        ...userValidation,
        email: true,
        password: true
      })
    } else {
      dispatch(loginUser(userData, history))
    }
  }

  return (
    <div className="form-container primary">
      <h1 className="form-heading">Atlas</h1>
      <div className="form-box">
        <div className="form-title">Login</div>
        <Form success className="form-holder">
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
            btnText="Log In"
            className="form-button"
            onClick={handleLoginUser}
          />
        </Form>
        <div className="form-info">
          <span>Don't have an account? </span>
          <Link to="/register" className="form-link">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
