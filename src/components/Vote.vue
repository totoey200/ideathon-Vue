<template>
  <div class="hello">
    <div>
        <h1>투표페이지</h1>
        <div class="mb-3">
        <span>투표 됬는지 안됬는지 메세지 뿅뿅</span>
        </div>
        <h2>본인이 맞는지 확인하세요!</h2>
        <div class="mb-3">
            <p>이름름</p>
            <p>학교대학교</p>
            <p>팀이름름</p>
        </div>
    </div>
    <div class="align-self-center">
        <a href="#" class="btn btn-primary">투표하기</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vote',
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
