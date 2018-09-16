<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <div class="page-1 page">
        <!-- RAKENNA HEADER FULLPAGE METHODEINEEN TÄNNE SISÄLLE, GLOBAL COMPONENT EI TOIMI -->
        <HeaderContainer/>
      </div>
      <div class="page-2 page">
        <nuxt/>
      </div>
      <div class="page-3 page">
        <Gallery/>
      </div>
      <div class="page-4 page">
        <Bio/>
      </div>
    </div>
  </div>
</template>


<script>
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import customHeader from '~/components/customHeader.vue'
import customHeader2 from '~/components/customHeader2.vue'
import HeaderContainer from '~/components/HeaderContainer.vue'
import Gallery from '~/components/Gallery.vue'
import Bio from '~/components/Bio.vue'


export default {
      data() {
    return {
      index: 0,
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function(ele, current, next) {
            console.log('before', current, next)
            this.index = next;
        },
        afterChange: function(ele, current) {
            this.index = current;
            console.log('after', current)
        }
      }
    }
  },
  methods: {
        moveTo: function(index) {
            this.$refs.fullpage.$fullpage.moveTo(index, true);
        }
  },
  components: {
    customHeader,
    customHeader2,
    HeaderContainer,
    Gallery,
    Bio
  }
}

</script>


<style>
 @import url('https://fonts.googleapis.com/css?family=Work+Sans:300');

html {
  font-family: "Work Sans", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.page {
  width: 100vw;
  height: 100vh !important;
}

</style>
