<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="~/assets/images/sample-0.jpg" /></div>
      <div class="swiper-slide"><img src="~/assets/images/sample-1.jpg" /></div>
      <div class="swiper-slide"><img src="~/assets/images/sample-2.jpg" /></div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<style lang="scss" scoped>
$onehundread: 100%;
.swiper-container {
    width: $onehundread;
    height: $onehundread;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>

<script>
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/bundle'
export default {
    mounted() {
        let swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
    }
}
</script>
