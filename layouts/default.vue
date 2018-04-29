<template>
  <div>
    <customHeader2/>
    <nuxt/>
    <Gallery/>
    <Bio/>
  </div>
</template>


<script>
import customHeader2 from '~/components/customHeader2.vue'
import Gallery from '~/components/Gallery.vue'
import Bio from '~/components/Bio.vue'


export default {
  components: {
    customHeader2,
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
</style>
