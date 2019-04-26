import SlimLoading from './SlimLoading'
import directive from './directive'

SlimLoading.install = function (Vue) {
  Vue.component(SlimLoading.name, SlimLoading)
  Vue.directive('loading', directive)
}

export default SlimLoading
