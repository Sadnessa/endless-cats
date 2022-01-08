<template>
    <div class="button-wrapper" @click="$emit('click')">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    color: black;
    border-radius: 50%;
    height: 40px;
    min-width: 40px;
    margin: 30px;
    cursor: pointer;
    user-select: none;
}
</style>