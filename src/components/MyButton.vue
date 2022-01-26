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

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    compClass() {
      return {
        'btn': true,
        'btn--small': this.small,
        'btn--disabled': this.disabled,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($color: #000000, $alpha: 0.4);
  color: white;
  border-radius: 50%;
  height: 40px;
  min-width: 40px;
  cursor: pointer;
  user-select: none;
  z-index: 1;

  &:hover {
    background: rgba($color: #000000, $alpha: 0.2);
    color: black;
    transition: all 0.3s ease-in-out;
  }

  &--small {
    height: 15px;
    min-width: 15px;
  }

  &--disabled {
    pointer-events: none;
    cursor: default;
    background: white;
    color: rgb(100, 100, 100);
  }
}
</style>