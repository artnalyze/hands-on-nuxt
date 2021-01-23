<template>
  <div>
    <li v-for="post in $store.state.posts" v-bind:key="post.id">
        <nuxt-link :to="`posts/${post.id}`">
            {{ post.title }}
        </nuxt-link>
    </li>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    async fetch () {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const { store } = this.$nuxt.context
        store.commit('setPosts', data)
    }
}
</script>