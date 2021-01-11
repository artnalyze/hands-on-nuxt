<template>
    <div class="sc-div">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio dolorem numquam dolor perferendis accusantium laboriosam animi deserunt quis ut?</p>
    <nav>
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
        </ul>
    </nav>
    </div>
</template>

<style lang="scss" scoped>
/* Variables */
$font-stack: sans-serif;
$primary-color: #6f77e0;
$font-size-p: 18px;

.sc-div {
    font: 100% $font-stack;
    color: $primary-color;
    font-size: $font-size-p;
}

/* Nesting */
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
}
</style>