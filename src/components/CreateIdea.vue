<template>
  <div class="container">
    <h1>아이디어 생성</h1>
    <div class="form-group">
      <label>아이디어 이름</label>
      <input type="text" class="form-control" maxlength="50" v-model="idea.title" placeholder="아이디어 이름">
    </div>
    <div class="form-group">
      <label>아이디어 설명</label>
      <input type="text" class="form-control" maxlength="50" v-model="idea.content" placeholder="한줄로 간단하게 적어주세요">
    </div>
    <div class="form-group">
      <label>팀 이름</label>
      <input type="text" class="form-control" maxlength="50" v-model="idea.team_name" placeholder="팀 이름">
    </div>
    <button class="btn btn-primary" @click="submit()">Submit</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      idea: {
        title: '',
        content: '',
        team_name: ''
      }
    }
  },
  methods: {
    submit () {
      var idea = {
        title: this.idea.title,
        content: this.idea.content,
        team_name: this.idea.team_name
      }
      console.log(idea)
      var context = this
      axios.post('http://localhost:3000/api/idea',idea).then((rep) => {
        context.$router.push('/home')
      })
    }
  }
}
</script>
