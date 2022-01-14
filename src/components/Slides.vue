<template>
     <div class="indicators">
    <MyButton small></MyButton>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue"

export default {
 components: { MyButton }
}
</script>

<style lang="scss" scoped>
.indicators {
  position: absolute;
  top: 85%;
  width: 600px;
  height: 35px;
}
</style>