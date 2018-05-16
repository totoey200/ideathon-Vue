<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between fixed-top">
    <a class="navbar-brand" href="/"><img src="../assets/logo.png" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" @click="createidea()">아이디어 만들기</a>
        <a class="nav-item nav-link" @click="editidea()">아이디어 수정</a>
        <a class="nav-item nav-link" @click="logout()">로그아웃</a>
      </div>
    </div>
  </nav>
</div>
</template>
<script>
import auth from '../auth'
import axios from 'axios'
export default {
  name: 'Nav',
  data () {
    return {
      id: '1'
    }
  },
  methods: {
    logout () {
      auth.logout()
    },
    createidea(){
      this.$router.push('/createidea')
    },
    editidea(){
      // axios.get('').then((rep)=>{
      //   this.id = rep.data.id
      // })
      this.$router.push('/editidea/' + this.id)
    }
  }
}
</script>
<style>
  img {
    height: 1.5rem;
  }
</style>

