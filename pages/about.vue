<template>
    <div>
        <h1>About Page</h1>
        <span class="link" v-on:click="goToFinal">
            click here
        </span>
        <transition>
            <p>Hello World</p>
        </transition>
    </div>
</template>

<script>
export default {
    layout: 'about',
    loading: false,
    transition: {
        name: 'fade-about',
        mode: 'out-in'
    },
    mounted () {
        setTimeout(() => {
            this.$nuxt.$loading.finish()
        }, 5000)
    },
    methods: {
        goToFinal() {
            this.$nuxt.$loading.start()
            setTimeout(() => {
                this.$router.push('/final')
            }, 5000)
        }
    }
}
</script>

<style lang="scss" scoped>
.element {
    opacity: 1;
    transition: opacity 300ms;
}

.element:hover {
    opacity: 0;
}

.v-enter, 
.v-leave-to {
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 300ms;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-leave,
.fade-enter-to {
    opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms;
}
</style>