<template>
  <div class="hello">
    <div v-if=0>
      <span v-for="idea in ideas" :key="idea.id">
        <team-card :title='idea.title' :content='idea.content' :img_url='idea.img_url' :vote_cnt='idea.vote_cnt' :name='idea.name'></team-card>
      </span>
    </div>
    <div v-else>
      <vote-page/>
    </div>
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
      ideas: ''
    }
  },
  components: {
    'team-card': Card,
    'vote-page': Vote
  },
  beforeCreate () {
    axios.get('http://localhost:3000/api/idea').then((response) => {
      this.ideas = response.data.result
    },
    (response) => {
      this.$router.push('/')
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
</style>
