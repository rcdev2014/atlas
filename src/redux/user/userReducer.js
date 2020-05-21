import { userTypes } from './userTypes'

const initialState = {
  userData: {},
  authenticated: false,
  created: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.CREATE_USER_REQUEST: {
      return { ...state, created: true }
    }
    case userTypes.USER_LOGIN_SUCCESS: {
      return { ...state, authenticated: true }
    }

    default:
      return state
  }
}
