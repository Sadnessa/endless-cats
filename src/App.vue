<template>
<MyButton> ~ </MyButton>
<SliderCard :sliderImg="cats"> </SliderCard>
<MyButton>></MyButton>
</template>

<script>
import MyButton from "./components/MyButton.vue"
import SliderCard from "./components/SliderCard.vue"
import { getCat } from "./api/catsapi"

export default {
  components: { MyButton, SliderCard },

  data() {
    return {
      cats: []
    }
  },

  created() {
    getCat().then(image => {this.cats.push(image)})
  }
}
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
</style>