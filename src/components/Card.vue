<template>
    <div class="list">
        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-sm-flex justify-content-around">
                <div class="img-parent">
                    <img class="img-locate" :src='img_url' alt="Card image cap">
                </div>
                <div class="align-self-center">
                        <h5 class="m-0">{{title}}ㄹ</h5>
                    </div>
                <div class="align-self-center">
                    <p class="mb-1">{{content}}</p>
                </div >
                <div class="align-self-center">
                    <a href="#" class="btn btn-primary">투표하기</a>
                </div>
                <small>3 vote</small>
            </div>
            <small>team name</small>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['img_url', 'title', 'content']
}
</script>
<style>
.list{
    display: inline-block;
    margin: 1%;
}
.img-parent{
    width: 15%;
}
.img-locate{
    max-width: 100%;
    height: auto;
}
@media (min-width: 300px) {
    .img-locate{
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>