<template>
  <div class="card-wrapper">
    <div class="scroll" :style="compStyle">
      <div v-for="img in sliderImg" :key="img" class="img-wrapper">
        <div class="loading-wrapper" v-if="img == null">
          <div class="hollow-dots-spinner" :style="spinnerStyle">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
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

.hollow-dots-spinner, .hollow-dots-spinner * {
      box-sizing: border-box;
    }

    .hollow-dots-spinner {
      height: 15px;
      width: calc(30px * 3);
    }

    .hollow-dots-spinner .dot {
      width: 15px;
      height: 15px;
      margin: 0 calc(15px / 2);
      border: calc(15px / 5) solid #494949;
      border-radius: 50%;
      float: left;
      transform: scale(0);
      animation: hollow-dots-spinner-animation 1000ms ease infinite 0ms;
    }

    .hollow-dots-spinner .dot:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }

    .hollow-dots-spinner .dot:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }

    .hollow-dots-spinner .dot:nth-child(3) {
      animation-delay: calc(300ms * 3);

    }

    @keyframes hollow-dots-spinner-animation {
      50% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
</style>