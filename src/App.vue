<template>
  <MyButton class="btn btn--left" @click="prevCat" v-if="index !== 0">
    <span class="material-icons"> keyboard_double_arrow_left</span>
  </MyButton>
  <SliderCard :sliderImg="cats" :imgIndex="index"></SliderCard>
  <MyButton class="btn btn--right" @click="nextCat">
    <span class="material-icons"> keyboard_double_arrow_right </span>
  </MyButton>
  <Slides v-model:slideIndex="index" :slideCount="cats.length"></Slides>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import SliderCard from "./components/SliderCard.vue";
import Slides from "./components/Slides.vue";
import { getCat } from "./api/catsapi";

export default {
  components: { MyButton, SliderCard, Slides },

  data() {
    return {
      cats: [],
      index: 0,
    };
  },

  created() {
    this.loadNewCat();
  },

  methods: {
    loadNewCat() {
      const arrLen = this.cats.push(null);
      getCat().then((image) => {
        this.cats[arrLen - 1] = image;
      });
    },

    nextCat() {
      this.index += 1;
      if (this.index > this.cats.length - 1) {
        this.loadNewCat();
      }
    },

    prevCat() {
      if (this.index === 0) {
        return;
      }
      this.index -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap');

.btn {
  position: absolute;
  margin: 30px;

  &--left {
    right: 80%;
  }

  &--right {
    left: 80%;
  }
}

.indicators {
  position: absolute;
  top: 85%;
}
</style>

<style lang="scss">
body {
  margin: 0px;
  width: 100%;
  height: 100vh;
}

#app {
  font-family: 'Mochiy Pop P One', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>