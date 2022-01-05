<template>
<MyButton> ~ </MyButton>
<SliderCard> <img src="https://i.pinimg.com/564x/0a/88/91/0a8891435bff4ce4612d57b811cc40b7.jpg"> </SliderCard>
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