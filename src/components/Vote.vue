<template>
  <div class="hello">
    <div>
        <h1>투표페이지</h1>
        <div class="mb-3">
        <span class="msghide">{{msg}}</span>
        </div>
        <h2>본인이 맞는지 확인하세요!</h2>
        <div>
            <p>이름: {{this.user.name}}</p>
            <p>학교: {{this.user.school}}</p>
            <p>팀: {{this.user.teamname}}</p>
        </div>
    </div>
    <div class="align-self-center">
        <a href="#" class="btn btn-primary" @click="voteNow()">투표하기</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Vote',
  props: [],
  data() {
    return{
      msg: 'message',
      user: {
        name: '',
        school: '',
        teamname: ''
      }
    }
  },
  methods: {
    voteNow () {
      axios.post('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea/vote/now').then((response) => {
        this.msg = response.data.message
      },
      (response) => {
        this.msg = response.response.data.message
      })
      document.getElementsByClassName('msghide')[0].classList.remove('msghide')
    }
  },
  beforeCreate(){
    axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/user/me').then((rep) => {
      this.user.name = rep.data.result[0].username
      this.user.school = rep.data.result[0].school
      this.user.teamname = rep.data.result[0].name
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.msghide{
  visibility: hidden;
}
</style>
