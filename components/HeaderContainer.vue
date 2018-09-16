<template>
    <div class="img-container">
        <customHeader2/>
    </div>
</template>


<script>
import customHeader from '~/components/customHeader.vue'
import customHeader2 from '~/components/customHeader2.vue'

export default {
    components: {
        customHeader,
        customHeader2
    }
    
}
</script>

<style>

.img-container {
    min-height: 100vh;
    background-image: url('~/static/mm-sormus.jpg');
    background-size: 100vw;
    background-repeat: no-repeat;
    z-index: 1;
}

</style>
