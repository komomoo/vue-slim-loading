<template>
  <svg
    :class="c('-circular')"
    viewBox="25 25 50 50">
    <circle
      :class="c('-circular__path')"
      cx="50"
      cy="50"
      r="20"
      fill="none" />
  </svg>
</template>

<script type="text/ecmascript-6">
import mixin from './mixins'

export default {
  mixins: [mixin],
}
</script>

<style lang="stylus">
$ = vue-slim-loading;
.{$}-circular {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;

  &__path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #409EFF;
    stroke-linecap: round;
  }

  @keyframes loading-rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px;
    }

    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px;
    }
  }
}
</style>
