<template>
<div class="gallery-container">

    <div class="image-container" v-for="image in images" :key="image.id"><img :src="`gallery/${image.img}`">
    </div>
           
           
</div>
</template>

<script>
export default {
    data () {
        return {
            images: [
                { img: 'wedding-rings-1-compressed-v2.png',
                id: 1 }
            ]
        }
    }
}
</script>

<style scoped>

.gallery-container {
    min-height: 100vh;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: auto;
}

.image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: #666;
    min-height: 70vh;
    min-width: 75vw;
}

/* placeholder, fix img size later */
.image-container img {
    width: 750px;
    height: 400px;
    margin: 2em;
}
</style>
