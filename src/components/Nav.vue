<template>
<div>
  <nav class="navbar navbar-expand-lg justify-content-between bg-custom">
    <a class="navbar-brand" href="/"><img src="../assets/logo_yellow.png" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div v-if="isLogin" class="navbar-nav">
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
      id: '',
      isLogin: ''
    }
  },
  watch:{
    '$route'(to, from){
      if(localStorage.getItem('idea_token')){
        this.isLogin = true
      }
      else{
        this.isLogin = false
      }
    }
  },
  beforeMount () {
    if(localStorage.getItem('idea_token')){
      this.isLogin = true
    }
    else{
      this.isLogin = false
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
      axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/user/me').then((rep1)=>{

        axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea').then((rep2)=>{
          var ideas = rep2.data.result
          for(var idea in ideas){
            if(ideas[idea].team_id == rep1.data.result[0].team_id){
              this.id = ideas[idea].id
              this.$router.push('/editidea/' + this.id)
            }
          }
        })
      })
    }
  }
}
</script>
<style>
  .navbar-brand img {
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

