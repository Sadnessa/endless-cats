<template>
  <div class="indicators">
    <MyButton
      small
      class="btn"
      v-for="n in compVisibleInicators"
      :key="n"
      :class="{ 'btn--active': n == slideIndex }"
      @click="toSlide(n)"
      :disabled="n === '...'"
    >
      {{ n === '...' ? n : n +1}}
    </MyButton>
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

    visibleIndicatorsCount: {
      type: Number,
      default: 13,
    },
  },

  computed: {
    compVisibleInicators() {
      let firstSlideIndcator = this.slideIndex - Math.floor(this.visibleIndicatorsCount / 2);
      
      if (firstSlideIndcator + this.visibleIndicatorsCount > this.slideCount) {
        firstSlideIndcator = this.slideCount - this.visibleIndicatorsCount;
      }

      if (firstSlideIndcator < 0) {
        firstSlideIndcator = 0;
      }

      let indicatorsArray = new Array(this.visibleIndicatorsCount)
        .fill(0)
        .map((arrEl, i) => {
          return firstSlideIndcator + i;
        });

      if (this.visibleIndicatorsCount > this.slideCount) {
        indicatorsArray = indicatorsArray.slice(0, this.slideCount);
      }

      if (firstSlideIndcator > 0) {
        indicatorsArray[0] = 0;
        indicatorsArray[1] = "...";
      }

      if (firstSlideIndcator < this.slideCount - this.visibleIndicatorsCount) {
        indicatorsArray[indicatorsArray.length - 1] = this.slideCount-1;
        indicatorsArray[indicatorsArray.length - 2] = "...";
      }

      return indicatorsArray;
    },
  },

  methods: {
    toSlide(toIndex) {
      this.$emit("update:slideIndex", toIndex);
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

@keyframes fadeAppearFromAbove {
  0% {
    opacity: 0;
    transform: scale(0) translateY(-100%);
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
  height: max-content;

  .btn {
    animation: fadeAppear 0.3s linear;
    margin: 6px;
    padding: 4px;
    font-size: 12px;
    min-width: 18px;
    min-height: 18px;

    &:last-child {
      animation: fadeAppearFromAbove 0.6s linear;
    }

    &--active {
      color: rgb(68, 68, 68);
      outline: 4px solid rgba($color: #000000, $alpha: 0.4);
      transition: all 0.5s ease-in-out;
      background: rgba($color: #000000, $alpha: 0.2);
    }
  }
}
</style>