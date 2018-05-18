<template>
  <div>

      <vote-page/>

  </div>
</template>

<script>
import Card from './Card.vue'
import Vote from './Vote.vue'
import axios from 'axios'
export default {
  name: 'HelloWorld',
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
   axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea').then((response) => {
        this.ideas = response.data.result
      },
      (response) => {
        this.$router.push('/')
      })
      axios.get('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea/pr/now').then((rep2)=>{
        this.nowidea = rep2.data.result[0]
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
