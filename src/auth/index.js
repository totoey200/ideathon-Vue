import {router} from '../router/index.js'

const API_URL = 'http://localhost:3000/api/'
const LOGIN_URL = API_URL + 'auth/login/'

export default {
  login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then(response => {
      localStorage.setItem('idea_token', response.data.token)
      if (redirect) {
        router.push(redirect)
      }
    }, response => {
      if (localStorage.getItem('idea_token')) {
        localStorage.removeItem('idea_token')
      }
    })
  },
  logout () {
    localStorage.removeItem('idea_token')
  },
  checkAuth (context) {
    var jwt = localStorage.getItem('idea_token')
    console.log(router)
    if (jwt) {
      router.push('/home')
    } else {
      router.push({name: 'Login'})
    }
  }
}
