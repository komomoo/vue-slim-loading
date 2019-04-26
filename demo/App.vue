<template>
  <div id="app">
    <h1>中间弹出</h1>

    <SlimLoading></SlimLoading>
  </div>
</template>

<script>
import SlimLoading from '../src'

export default {
  name: 'App',
  components: {
    SlimLoading,
  },
  data () {
    return {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      popupTransition: '',
    }
  },
  created () {
    this.transitionList = ['slim-scale', 'slim-zoom', 'slim-fade-in-bottom', 'slim-slide-in-bottom']
  },
  methods: {
    // 显示
    popupShow (index) {
      this.popupTransition = this.transitionList[index] // 更换动效
      this.show = true
    },
    // 隐藏
    popupHide () {
      this.show = false
    },
  },
}
</script>

<style lang="stylus">
$headerHeight = 44px;
$baseColor = #6A9FB5;
$bgColor = #FAFAFA;
* {
  padding: 0;
  margin: 0;
  border: none;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;

  > h1 {
    font-size: 24px;
    padding: 0 15px;
    padding-top: 40px;
    padding-bottom: 20px;
    color: #6D7A80;
  }

  .popup {
    width: 80%;
    height: 200px;
    border-radius: 16px;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    &.scroll {
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .close-btn {
      font-size: 20px;
      font-weight: 500;
      color: $baseColor;
      background-color: $bgColor;
      text-align: center;
      width: 50px;
      height: 50px;
      border-radius: 4px;
    }
  }

  .btn-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .open-btn {
      display: block;
      width: 60%;
      height: 100px;
      margin: 15px auto;
      font-size: 24px;
      color: $baseColor;
      background-color: $bgColor;
    }
  }
}
</style>
