<template>
  <h1 data-animation="spin-in">
    <i class="fi-heart"></i>
    Hello Motion UI</h1>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    $('h1').click(() => {
      // https://get.foundation/sites/docs/motion-ui.html#built-in-transitions
      let $animation = $('h1').data('animation')
      this.$motionUi.animateIn($('h1'), $animation)
    })
  }
}
</script>