<template>
  <div class="container">
    <h3>아이디어 생성</h3>
    <picture-input
      ref="pictureInput"
      @change="onChange"
      width="400"
      height="400"
      margin="16"
      accept="image/jpeg,image/png"
      size="10"
      buttonClass="btn"
      :customStrings="{
        upload: '<h4>Bummer!</h4>',
        drag: '서비스 대표 이미지 업로드🦁'
      }">
    </picture-input>
    <div class="form-group">
      <label>아이디어 이름</label>
      <input type="text" class="form-control" maxlength="50" v-model="idea.title" placeholder="아이디어 이름">
    </div>
    <div class="form-group">
      <label>아이디어 설명</label>
      <input type="text" class="form-control" maxlength="50" v-model="idea.content" placeholder="한줄로 간단하게 적어주세요">
    </div>
    <a href="#" class="mr-1" @click="card()">돌아가기</a>
    <button class="btn btn-primary" @click="submit()">Submit</button>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue';
import PictureInput from 'vue-picture-input';

export default {
  name: 'CreateIdea',
  data () {
    return {
      idea: {
        title: '',
        content: '',
        base64: ''
      }
    }
  },
  methods: {
    card(){
      this.$router.push('/home')
    },
    submit () {
      var idea = {
        title: this.idea.title,
        content: this.idea.content,
        base64: this.idea.base64 = this.$refs.pictureInput.image
      }
      axios.post('http://ec2-13-125-210-103.ap-northeast-2.compute.amazonaws.com:3000/api/idea',idea).then((rep) => {
        this.$router.push('/home')
      },
      (rep) => {
        alert(rep.response.data.message)
        this.$router.push('/home')
      })
    }
  },
  components: {
    PictureInput
  }
}
</script>
<style scoped>
.container img {
    width: 80%;
    border: 1px solid #ddd;
    padding: 5px;
}
h3 {
  font-weight: bold;
  color: #182c67;
  margin-bottom: 20px;
  margin-top:15px;
}
</style>
