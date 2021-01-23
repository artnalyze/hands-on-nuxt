<template>
  <div class="container">
    <p>Hello {{ name }}!</p>
    <NuxtLink to="/load2">
      Go to /load2
    </NuxtLink>
  </div>
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({ name: "world" });
      }, 1000);
    });
  }
};
</script>
