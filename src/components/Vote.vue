<template>
  <div class="hello">
    <div class="container">
        <h3>본인이 맞는지 확인하세요!</h3>
        <div class="alert alert-danger" role="alert">
          <p>투표시 주의사항</p>
        <ul>
          <li>자신의 팀에 투표하실 수 없습니다!</li>
          <li>투표는 한 아이디어에 한번만 가능합니다!</li>
          <li>투표시간이 지나면 투표하실 수 없습니다 ㅠㅠ</li>
        </ul>
        </div>
        <div class="card">
          <div class="card-header">
            {{this.user.name}}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{this.user.school}}</li>
            <li class="list-group-item">{{this.user.teamname}}</li>
          </ul>
        </div>
        <div class="align-self-center mt-3">
          <a href="#" class="btn btn-outline-primary btn-lg btn-block" @click="voteNow()">투표하기</a>
      </div>
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
        alert(this.msg)
      },
      (response) => {
        this.msg = response.response.data.message
        alert(this.msg)
      })

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
h3 {
  font-weight: bold;
  color: #182c67;
  margin-bottom: 20px;
  margin-top:15px;
}
.btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):active, .show>.btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #182C66;
  border-color: #182c67;
}
.btn-outline-primary {
  color: #182c67;
  background-color: transparent;
  background-image: none;
  border-color: #182c67;
}
li {
  list-style-type: none;
}
ul {
  padding-left: 0;
}

</style>
