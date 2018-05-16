<template>
  <div class="hello">
    <div>
        <h1>투표페이지</h1>
        <div class="mb-3">
        <span>{{msg}}</span>
        </div>
        <h2>본인이 맞는지 확인하세요!</h2>
        <div>
            <p>이름름</p>
            <p>학교대학교</p>
            <p>팀이름름</p>
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
      msg: ''
    }
  },
  methods: {
    voteNow () {
    
    axios.post('http://localhost:3000/api/idea/vote/now').then((response) => {
      this.msg = response.response.data.message
    },
    (response) => {
      this.msg = response.response.data.message
    })
   }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
