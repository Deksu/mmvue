<template>
<div class="gallery-container" id="gallery">
    <AwesomeSwiperFade/>
</div>
</template>

<script>

import AwesomeSwiperFade from '~/components/AwesomeSwiperFade.vue'
export default {
    components: {
        AwesomeSwiperFade
    }
}
</script>

<style scoped>

.gallery-container {
    min-height: 100vh;
    background-color: #eee;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: auto;
}

/* .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: #666;
    min-height: 70vh;
    min-width: 75vw;
} */

/* placeholder, fix img size later */

/* .image-container img {
    width: 750px;
    height: 400px;
    margin: 2em;
} */
</style>
