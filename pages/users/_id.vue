<template>
  <div if="user">
    <h2>{{ user.name }}</h2>
    <nuxt-link class="button" to="/users">
      Users
    </nuxt-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return {
      user: data
    };
  },
  validate({ params }) {
    let test = /^\d+$/.test(params.id)
    if(test === false) {
      throw new Error('User not found')
    }
    return true
  }

  /*
  async validate({params}){
    return new Promise(....)
  }
  */
};
</script>
