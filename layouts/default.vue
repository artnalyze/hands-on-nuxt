<template>
  <div>
    <Navbar></Navbar>
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