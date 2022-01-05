<template>
    <div class="card-wrapper">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
    width: 800px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(224, 224, 224);
    border-radius: 20px;
}
</style>