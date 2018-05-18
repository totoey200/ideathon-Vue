<template>
  <div class="container">
    <h3>아이디어 수정</h3>
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
      axios.put('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea/' + this.$route.params.id, idea).then((rep) => {
        this.$router.push('/home')
      })
    },
    fetchdata () {
      axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea').then((rep) => {
        var ideas = rep.data.result
        for (var idea in ideas) {
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
<style>
h3 {
  font-weight: bold;
  color: #182c67;
  margin-bottom: 20px;
  margin-top:15px;
}
</style>
