<template>
    <p>{{ message }}</p>
</template>

<script>
export default {
    data () {
        return {
            message: 'hello w.'
        }
    },
    asyncData(context) {
        return {
            message: 'This is Contact Page'
        }
    }
}
</script>