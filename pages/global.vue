<template>
  <div class="global-all">
    <h1>Swiper</h1>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~/assets/images/sample-0.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="~/assets/images/sample-1.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="~/assets/images/sample-2.jpg" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let swiper = new this.$swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
