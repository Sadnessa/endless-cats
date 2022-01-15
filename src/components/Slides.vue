<template>
  <div class="indicators">
    <MyButton
      small
      class="btn"
      v-for="(n, index) in slideCount"
      :key="n"
      @click="toSlide(index)" 
    />
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  components: { MyButton },

  props: {
    slideIndex: {
      type: Number,
      default: 0,
    },

    slideCount: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    toSlide(toIndex) {
      this.$emit("update:slideIndex", toIndex) 
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fadeAppear {
  0% {
    opacity: 0;
  } 

  100% {
    opacity: 1;
  }
}

.indicators {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 85%;
  max-width: 600px;
  width: 100%;
  height: 35px;

  .btn {
    animation: fadeAppear 0.5s linear;
    margin: 6px;
  }
}
</style>