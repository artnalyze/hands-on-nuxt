<template>
  <div>
    <ul class="menu align-center">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/form">Form</nuxt-link></li>
      <li><nuxt-link to="/motion-ui">Motion UI</nuxt-link></li>
      <li><nuxt-link to="/scss-ex">SCSS Ex</nuxt-link></li>
      <li><nuxt-link to="/animate">Animate</nuxt-link></li>
      <li><nuxt-link to="/swiper">Swiper</nuxt-link></li>
      <li><nuxt-link to="/global">Global</nuxt-link></li>
    </ul>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted () {
    this.$getCurrentScreenSize ()
  }
}
</script>