<template>
  <div class="container">
    <p>About Page</p>
    <NuxtLink to="/load1">
      Go to /load1
    </NuxtLink>
  </div>
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({});
      }, 1000);
    });
  }
};
</script>
