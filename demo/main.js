import Vue from 'vue'
import App from './App'
import Loading from '../src'

Vue.use(Loading)

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
