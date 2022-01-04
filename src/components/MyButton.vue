<template>
    <div class="button-wrapper">
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
    height: 30px;
    width: 30px;
}
</style>