import {router} from '../router/index.js'
import axios from 'axios'

const API_URL = 'http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/'
const LOGIN_URL = API_URL + 'auth/login/'

export default {
  login (context, creds, redirect) {
    axios.post(LOGIN_URL, creds).then((response) => {
      localStorage.setItem('idea_token', response.data.token)
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem('idea_token')
      if (redirect) {
        router.push(redirect)
      }
    }, (response) => {
      if (localStorage.getItem('idea_token')) {
        localStorage.removeItem('idea_token')
      }
      context.error = 'ID, PW를 확인해주세요'
    })
  },
  logout () {
    delete localStorage.idea_token
    axios.defaults.headers.common['x-access-token'] = undefined
    router.push('/')
  },
  checkAuth () {
    var jwt = localStorage.getItem('idea_token')
    if (jwt) {
      router.push('/home')
    } else {
      router.push('/')
    }
  }
}
