<template>
  <MyButton class="btn btn--left" @click="prevCat" v-if="index !== 0">
    ~
  </MyButton>
  <SliderCard :sliderImg="cats" :imgIndex="index"> </SliderCard>
  <MyButton class="btn btn--right" @click="nextCat">></MyButton>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import SliderCard from "./components/SliderCard.vue";
import { getCat } from "./api/catsapi";

export default {
  components: { MyButton, SliderCard },

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
      getCat().then((image) => {
        this.cats.push(image);
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

<style lang="scss">
body {
  margin: 0px;
  width: 100%;
  height: 100vh;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.btn {
  position: absolute;

  &--left {
    right: 80%;
  }

  &--right {
    left: 80%;
  }
}
</style>