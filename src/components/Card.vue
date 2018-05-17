<template>
    <div class="list">
        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-sm-flex justify-content-around">
                <div class="img-parent">
                    <img class="img-locate" :src='img_url' alt="Card image cap">
                </div>
                <div class="align-self-center">
                        <h5 class="m-0 text-wrap">{{title}}</h5>
                    </div>
                <div class="align-self-center">
                    <p class="mb-1 text-wrap">{{content}}</p>
                </div >
                <div>
                    <small>{{vote_cnt}} vote</small>
                </div>
            </div>
            <small>팀명 : {{name}}</small>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['img_url', 'title', 'content', 'vote_cnt', 'name']
}
</script>
<style>
@media (max-width: 500px) {
    .img-locate{
    max-width: 300%;
    height: auto;
    margin: 0 auto;
  }
}
.list{
    display: inline-block;
    margin: 1%;
}
.img-parent{
    width: 15%;
    min-width: 15%;
}
.img-locate{
    max-width: 200px;
    max-height: 200px;
    height: auto;
}
.text-wrap{
    min-width: 200px;
    max-width: 200px;
    word-wrap: break-word;
}
</style>
