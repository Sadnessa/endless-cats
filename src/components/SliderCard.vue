<template>
    <div class="card-wrapper">
       <div v-for="img in sliderImg" :key="img" class="img-wrapper">
           <img :src="img">
           </div> 
    </div>
</template>

<script>
export default {
    props: {
        sliderImg: {
            type: Array,
        },
    },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
    width: 800px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(224, 224, 224);
    border-radius: 20px;
    overflow: hidden;
}
</style>