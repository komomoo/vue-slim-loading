/**
 * vue-slim-loading
 * @Author komo
 * @Date 2019/04
 */

<template>
  <div :class="c()">
    <transition name="loading-fade">
      <div
        v-show="show"
        :class="[c('-mask'), ...maskClass]">
        <div :class="[c('-spinner')]">
          <slot>
            <Circular :color="color" :class="loadingClass"></Circular>
          </slot>
          <p
            v-if="text"
            :class="[c('-spinner__text'), ...textClass]"
            :style="{'color': color}">
            {{ text }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import mixin from './mixins'
import Circular from './Circular'

export default {
  name: 'SlimLoading',
  components: {
    Circular,
  },
  mixins: [mixin],
  props: {
    show: {
      // .sync 是否显示
      type: Boolean,
      default: false,
    },
    text: {
      // 加载文本
      type: String,
      default: null,
    },
    color: {
      // 颜色
      type: String,
      default: '#409EFF',
    },
    maskClass: {
      // 遮罩样式类
      type: Array,
      default: null,
    },
    loadingClass: {
      // 加载样式类
      type: Array,
      default: null,
    },
    textClass: {
      // 文本样式类
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="stylus">
$ = vue-slim-loading;
$color = #409EFF;
.{$} {
  &-mask {
    position: absolute;
    z-index: 100;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.9);
    transition: opacity 0.3s;

    html.dark-mode & {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  &-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;

    &__text {
      color: $color;
      margin: 3px 0;
      font-size: 14px;
    }
  }

  .loading-fade-enter, .loading-fade-leave-active {
    opacity: 0;
  }
}
</style>
