<template>
  <section class="container">
      <div class="customheader-container">
      <customHeader/>
      <!-- testing the first header style -->
      </div>
  </section>
</template>

<script>
import customHeader from '~/components/customHeader.vue'

export default {
    components: {
        customHeader
    }
}

</script>


<style scoped>

.customheader-container {
    display: flex;
    flex: 1;
    align-items: flex-start;
}

.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
}

.img-container {
    min-height: 100vh;
    background-image: url('~/static/mm-sormus-cropped.png');
    object-fit: cover;
}

</style>
