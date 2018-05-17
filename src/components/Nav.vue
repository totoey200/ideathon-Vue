<template>
<div>
  <nav class="navbar navbar-expand-lg justify-content-between fixed-top bg-custom">
    <a class="navbar-brand" href="/"><img src="../assets/logo_yellow.png" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <div class="nav-item nav-link f-color" @click="createidea()">아이디어 만들기</div>
        <div class="nav-item nav-link f-color" @click="editidea()">아이디어 수정</div>
        <div class="nav-item nav-link f-color" @click="logout()">로그아웃</div>
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
    height: 1.3rem;
  }
  .nav-link{
    cursor: pointer;
  }
  .bg-custom{
    background-color: #182C67;
  }
  .f-color{
    color: #D8AC45;
  }
  .f-color:hover{
    color: #D8AC45BE
  }
</style>

