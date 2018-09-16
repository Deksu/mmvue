<template>
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
          <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage</p>
        </div>
        <div class="page-2 page">
          <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>
        </div>
        <div class="page-3 page">
          <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'bounceInRight', delay: 300}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'bounceInDown', delay: 600}">vue-fullpage</p>
          <p class="part-3" v-animate="{value: 'zoomInDown', delay: 900}">vue-fullpage</p>
        </div>
      </div>
    </div>
</template>

<script>
import 'animate.css';
import 'fullpage-vue/src/fullpage.css';

export default {
    data() {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (prev, next) {
        },
        afterChange: function (prev, next) {
        }
      }
    }
  },
  methods:{
    moveNext(){
      this.$refs.example.$fullpage.moveNext(); //Move to the next page
    }
  }
  
}
</script>

<style>
.fullpage-container {
    display: flex;
    width: 100vw;
    height: 100vh;
}
.page {
    justify-content: center;
    font-size: 26px;
    color: #eee;
}
.page-1 {
    background: #1bbc9b;
}
.page-2 {
    background: #000000;
}
.page-3 {
    background: #aabbcc;
}
</style>

