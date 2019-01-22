<style lang="scss">
  .loadingIndicator {
    &__loader {
      width: 50px;
      height: 50px;
      position: relative;
      margin: 1rem auto;

      svg {
        overflow: hidden;
        animation: rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        > circle {
          stroke-dasharray: 1,200;
          stroke-dashoffset: 0;
          stroke-linecap: round;
          animation: dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;
        }
      }
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1,200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -35;
    }
    to {
      stroke-dasharray: 89,200;
      stroke-dashoffset: -124;
    }
  }

  @keyframes color {
    0%,to {
      stroke: #008744;
    }
    25% {
      stroke: #0057e7;
    }
    50% {
      stroke: #d62d20;
    }
    75% {
      stroke: #ffa700;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

<template>
  <div class="loadingIndicator">
    <div
      v-if="loading"
      class="loader loadingIndicator__loader"
    >
      <svg viewBox="25 25 50 50">
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="5"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LoadingIndicator',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
