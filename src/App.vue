<template>
<MyButton> ~ </MyButton>
<SliderCard> <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"> </SliderCard>
<MyButton>></MyButton>
</template>

<script>
import MyButton from "./components/MyButton.vue"
import SliderCard from "./components/SliderCard.vue"

export default {
  components: { MyButton, SliderCard }
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