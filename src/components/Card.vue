<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src='img_url' alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{content}}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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
.card{
    display: inline-block;
    margin: 1%;
}
</style>
