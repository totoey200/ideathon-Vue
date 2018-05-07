<template>
  <div class="hello">
    <my-nav/>
    <span v-for="n in 10" :key="n"><team-card/></span>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Card from './Card.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'team-card': Card,
    'my-nav': Nav
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
.hello{
  margin-top: 4rem;
}
</style>
