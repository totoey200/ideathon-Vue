<template>
    <div class="list">
        <div class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-sm-flex justify-content-around">
                <div class="img-parent">
                    <img class="img-locate" :src='img_url' alt="Card image cap">
                </div>
                <div class="align-self-center text-wrap">
                    <p id="list-title">{{title}}</p>
                </div>
                <div class="align-self-center text-wrap">
                    <p class="list-content">{{content}}</p>
                </div>
                <div class="align-self-center text-wrap">
                    <p class="list-content">팀명 : {{name}}</p>
                </div>
                <div class="align-self-center text-wrap">
                    <p id="list-vote">{{vote_cnt}} vote</p>
                </div>
            </div>
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
    display: flex;
    align-items: center;
    justify-content: center;
}
.text-wrap{
    min-width: 200px;
    max-width: 200px;
    word-wrap: break-word;
}
img {
    max-width: 150px;
    max-height: 150px;
}
p#list-title {
    font-weight: bold;
    font-size: 25px;
}
p#list-vote {
    font-weight: bold;
    font-size: 25px;
}
</style>
