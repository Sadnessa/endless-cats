<template>
  <div class="card-wrapper">
    <div class="scroll" :style="compStyle">
      <div v-for="img in sliderImg" :key="img" class="img-wrapper">
        <div class="loading-wrapper" v-if="img == null">
          ....................................
        </div>
        <img :src="img" v-else />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sliderImg: {
      type: Array,
    },

    imgIndex: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    compStyle() {
      return "transform: translateX(" + this.imgIndex * -100 + "%)";
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 800px;
  height: 500px;
  background: rgb(224, 224, 224);
  border-radius: 20px;
  overflow: hidden;
  

  .scroll {
    width: 100%;
    height: 100%;
    white-space: nowrap;
    transition: all 0.5s ease-in-out; 

    .img-wrapper {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      width: 100%;
      height: 100%;

      img {
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>