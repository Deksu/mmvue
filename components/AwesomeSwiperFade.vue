<template>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
                <img :src="`gallery/${banner.img}`">
            </div>
        </div>
            <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        banners: [ {img:'kukka-punainen-fullhd.jpg', id: 1 }, {img:'kukka-vihrea-fullhd.jpg', id: 2 }, {img:'kukka-sininen-fullhd.jpg', id: 3 }
        ],
        swiperOption: {
            effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          }
          // some swiper options...
        }
      }
    },
    // mounted() {
    //   setTimeout(() => {
    //     this.banners.push('/4.jpg')
    //     console.log('banners update')
    //   }, 3000)
    //   console.log(
    //     'This is current swiper instance object', this.mySwiper, 
    //     'It will slideTo banners 3')
    //   this.mySwiper.slideTo(3, 1000, false)
    // }
}
</script>

<style scoped>

.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  min-width: 100vw;
  display: flex;
  height: auto;
}

</style>
