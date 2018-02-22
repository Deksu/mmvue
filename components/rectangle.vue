<template>
  <div class="rectangle">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>


<script>
export default {
  props: ['title', 'text']
}
</script>




<style scoped>

.rectangle {
    background-color: #ccc;
    width: 300px;
    height: 100px;
}

</style>
