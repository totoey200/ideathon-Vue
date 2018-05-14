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
    <button class="btn btn-primary" @click="submit()">Submit</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'EditIdea',
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
        content: this.idea.content
      }
      console.log(idea)
      axios.put('http://localhost:3000/api/idea/' + this.$route.params.id, idea).then((rep) => {
        this.$router.push('/home')
      })
    },
    fetchdata () {
      console.log(this.$route.params.id)
      axios.get('http://localhost:3000/api/idea').then((rep) => {
        var ideas = rep.data.result
        console.log(ideas)
        for (var idea in ideas) {
          console.log(ideas[idea].id)
          if (ideas[idea].id == this.$route.params.id) {
            this.idea.title = ideas[idea].title
            this.idea.content = ideas[idea].content
            break
          }
        }
      })
    }
  },
  created () {
    this.fetchdata()
  },
  watch: {
    '$route': 'fetchdata'
  }
}
</script>
