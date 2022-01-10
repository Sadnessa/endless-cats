<template>
  <div class="card-wrapper">
    <div v-for="img in sliderImg" :key="img" class="img-wrapper" :style="compStyle">
      <div class="loading-wrapper" v-if="img == null">
          ....................................
      </div>
      <img v-else :src="img" />
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
          return "transform: translateX(" + this.imgIndex*-100+"%)"
      }
  }
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 800px;
  height: 500px;
  background: rgb(224, 224, 224);
  border-radius: 20px;
  overflow: hidden;
  white-space: nowrap;
}

.img-wrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out; 

    img {
        max-width: 100%;
        max-height: 100%;   
        height: 100%;
        object-fit: contain; 
        
    }
}
</style>