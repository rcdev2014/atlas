import { userTypes } from './userTypes'

const initialState = {
  userData: {},
  authenticated: false,
  created: false,
  users: [],
  dashboardActiveMenu: 'accounts' // Temp
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.CREATE_USER_REQUEST: {
      return { ...state, created: true }
    }
    case userTypes.USER_LOGIN_SUCCESS: {
      return { ...state, authenticated: true }
    }
    case userTypes.SET_USERS: {
      return { ...state, users: action.users }
    }
    case userTypes.DASHBOARD_ACTIVE_MENU: {
      // Temp
      return { ...state, dashboardActiveMenu: action.dashboardActiveMenu }
    }

    default:
      return state
  }
}
