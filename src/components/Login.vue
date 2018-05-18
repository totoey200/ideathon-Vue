<template>
  <div class="col-sm-4 col-sm-offset-4 mr-auto ml-auto">
    <h3>연합아이디어톤 투표시스템</h3>
    <div class="logo-list">
      <img src="../assets/images/한양대.png" width="80px">
      <img src="../assets/images/산기대w.png" width="80px">
      <img src="../assets/images/인하대.png" width="80px">
      <img src="../assets/images/숙대e.png" width="80px">
    </div>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        placeholder="Enter your username"
        v-model="credentials.username"
        v-on:keyup.enter="submit()"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
        v-on:keyup.enter="submit()"
      >
    </div>
    <button class="btn btn-primary" @click="submit()">로그인</button>
  </div>
</template>
<script>
import auth from '../auth'
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    submit () {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login(this, credentials, '/home')
    }
  },
  beforeCreate () {
    auth.checkAuth()
  }
}
</script>
<style scoped>
h3 {
  margin-top:15px;
  font-weight: bold;
  color: #182c67;
  margin-bottom: 20px;
}
.logo-list {
  margin-bottom: 15px;
}
</style>