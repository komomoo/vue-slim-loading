/**
 * vue-slim-loading
 * @Author momoko
 * @Date 2019/04
 */

<template>
  <div :class="c()">
    <transition name="el-loading-fade">
      <div
        v-show="visible"
        class="el-loading-mask"
        :class="[customClass]">
        <div class="el-loading-spinner">
          <svg
            v-if="!spinner"
            class="circular"
            viewBox="25 25 50 50">
            <circle
              class="path"
              cx="50"
              cy="50"
              r="20"
              fill="none" />
          </svg>
          <i v-else :class="spinner"></i>
          <p v-if="text" class="el-loading-text">{{ text }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import mixin from './mixins'

export default {
  name: 'SlimPopup',
  mixins: [mixin],
  data () {
    return {
      text: null,
      spinner: true,
      background: null,
      fullscreen: true,
      visible: true,
      customClass: '',
    }
  },
}
</script>

<style lang="stylus">
@import './stylus/index.styl';

$ = vue-slim-loading;
.{$} {
  &__mask {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    touch-action: none;
    backdrop-filter: blur(5px);
  }
}
</style>
