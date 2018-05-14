<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between fixed-top">
    <a class="navbar-brand" href="#">연합아이디어톤</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" @click="createidea()">아이디어 만들기</a>
        <a class="nav-item nav-link" @click="logout()">마이페이지</a>
      </div>
    </div>
  </nav>
</div>
</template>
<script>
import auth from '../auth'
export default {
  name: 'Nav',
  methods: {
    logout () {
      auth.logout()
    },
    createidea(){
      this.$router.push('/createidea')
    }
  }
}
</script>
<style>

</style>

