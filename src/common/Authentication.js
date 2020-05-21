export default class Authentication {
  static accessToken = ''

  // the method signature will be same
  static saveAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken)
  }

  static load() {
    return localStorage.getItem('accessToken')
  }

  static remove() {
    localStorage.removeItem('accessToken', '')
  }

  static saveUserProfile(profile) {
    localStorage.setItem('userProfile', profile)
  }

  static loadUserProfile() {
    return localStorage.getItem('userProfile')
  }

  static reset() {
    localStorage.setItem('accessToken', '')
    localStorage.setItem('authUser', '')
  }
}
