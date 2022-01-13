<template>
  <div :class="compClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    compClass() {
    if (this.small) {
        return "btn btn--small" 
    } else {
        return "btn"
    }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  color: black;
  border-radius: 50%;
  height: 40px;
  min-width: 40px;
  margin: 30px;
  cursor: pointer;
  user-select: none;
  z-index: 1;

  &--small {
      height: 15px;
  min-width: 15px;
  }
}
</style>