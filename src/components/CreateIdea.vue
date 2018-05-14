<template>
  <div class="container">
    <h1>아이디어 생성</h1>
    <vue-base64-file-upload
        class="v1"
        accept="image/png,image/jpeg"
        image-class="v1-image"
        input-class="v1-input"
        :max-size="customImageMaxSize"
        @size-exceeded="onSizeExceeded"
        @file="onFile"
        @load="onLoad"
        placeholder="Click here to upload image (이미지는 jpg, png만 업로드 가능합니다.)" />
    <div class="form-group">
      <label>아이디어 이름</label>
      <input type="text" class="form-control" maxlength="50" v-model="idea.title" placeholder="아이디어 이름">
    </div>
    <div class="form-group">
      <label>아이디어 설명</label>
      <input type="text" class="form-control" maxlength="50" v-model="idea.content" placeholder="한줄로 간단하게 적어주세요">
    </div>
    <div class="form-group">
      <label>팀 이름</label>
      <input type="text" class="form-control" maxlength="50" v-model="idea.team_name" placeholder="팀 이름">
    </div>
    <a href="#" class="mr-1" @click="card()">돌아가기</a>
    <button class="btn btn-primary" @click="submit()">Submit</button>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue';
import VueBase64FileUpload from 'vue-base64-file-upload';

export default {
  name: 'CreateIdea',
  data () {
    return {
      customImageMaxSize: 3, // megabytes
      idea: {
        title: '',
        content: '',
        team_name: ''
      }
    }
  },
  methods: {
    onFile(file) {
      console.log(file); // file object
    },

    onLoad(dataUri) {
      console.log(dataUri); // data-uri string
    },

    onSizeExceeded(size) {
      alert(`Image ${size}Mb size exceeds limits of ${this.customImageMaxSize}Mb!`);
    },
    card(){
      this.$router.push('/home')
    },
    submit () {
      var idea = {
        title: this.idea.title,
        content: this.idea.content,
        team_name: this.idea.team_name
      }
      axios.post('http://localhost:3000/api/idea',idea).then((rep) => {
        this.$router.push('/home')
      })
    }
  },
  components: {
    VueBase64FileUpload
  }
}
</script>
<style>
.container img {
    width: 80%;
    border: 1px solid #ddd;
    padding: 5px;
}
</style>
