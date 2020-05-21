import { userTypes } from './userTypes'
import axios from 'axios'

import Authentication from '../../common/Authentication'

const createUserRequest = () => {
  return { type: userTypes.CREATE_USER_REQUEST }
}

export const createUser = data => {
  return dispatch => {
    // POST - Create User
    axios
      .post('https://reqres.in/api/register', data)
      .then(response => {
        dispatch(createUserRequest(true))
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const userLoginSuccess = () => {
  return { type: userTypes.USER_LOGIN_SUCCESS }
}

export const loginUser = (data, route) => {
  return dispatch => {
    localStorage.clear()

    // POST - Login
    axios
      .post('https://reqres.in/api/login', data)
      .then(response => {
        Authentication.saveAccessToken(response)
        dispatch(userLoginSuccess())
        route.push('/dashboard')
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
