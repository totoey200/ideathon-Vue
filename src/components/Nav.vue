<template>
  <nav class="navbar navbar-light bg-light justify-content-between fixed-top">
    <a class="navbar-brand" href="#">연합아이디어톤</a>
    <div class="navbar-nav">
      <a class="nav-link" @click="logout()">마이페이지</a>
    </div>
  </nav>
</template>
<script>
import auth from '../auth'
export default {
  name: 'Nav',
  methods: {
    logout () {
      auth.logout()
    }
  }
}
</script>
