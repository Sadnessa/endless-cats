<template>
<SliderCard></SliderCard>
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
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>