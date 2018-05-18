<template>
  <div v-if="isAdmin">
    <button class="btn btn-outline-primary btn-lg btn-block showbtn" @click="showrank()">결과보기</button>
      <span v-if="nowidea">
        <team-card class="mycard nowidea animated flipInX"  :title='nowidea.title' :content='nowidea.content' :img_url='nowidea.img_url' :vote_cnt='nowidea.vote_cnt' :name='nowidea.name'></team-card>
      </span>
      <span v-for="idea in ideas" :key="idea.id">
        <team-card v-if="idea.status!==0" class="mycard animated flipInX" :title='idea.title' :content='idea.content' :img_url='idea.img_url' :vote_cnt='idea.vote_cnt' :name='idea.name'></team-card>
      </span>
  </div>
</template>

<script>
import Card from './Card.vue'
import Vote from './Vote.vue'
import axios from 'axios'
export default {
  name: 'CardList',
  data () {
    return {
      ideas: '',
      nowidea: '',
      isAdmin: ''
    }
  },
  methods: {
    showrank(){
      location.reload()
    }
  },
  components: {
    'team-card': Card,
    'vote-page': Vote
  },
  beforeCreate () {
    axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/user/admin').then((rep)=>{
      this.isAdmin = rep.data.isAdmin
      axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea').then((response) => {
        this.ideas = response.data.result
      },
      (response) => {
        this.$router.push('/')
      })
      axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea/pr/now').then((rep2)=>{
        this.nowidea = rep2.data.result[0]
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mycard{
  width: 95%;
}
.showbtn{
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1%;
  margin-top: 1%;
}
.nowidea > div > div{
  color: red;
}
</style>
