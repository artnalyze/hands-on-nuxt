<template>
    <div>
        <h1>Secured Page</h1>
    </div>
</template>

<script>
export default {
    middleware: 'auth'
}
</script>