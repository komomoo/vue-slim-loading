import SlimLoading from './Loading'
import { getStyle } from './utils'

SlimLoading.install = function (Vue) {
  Vue.component(SlimLoading.name, SlimLoading)

  const Loading = Vue.extend(SlimLoading)

  Vue.directive('loading', {
    bind: function (el, binding, vnode) {
      const textExr = el.getAttribute('loading-text')
      const vm = vnode.context

      if (!getStyle(el, 'position')) el.style.position = 'relative'

      const div = document.createElement('div')
      el.appendChild(div)

      const loadingInstance = new Loading({
        el: div,
        propsData: {
          show: !!binding.value,
          text: textExr || vm[textExr],
        },
      })
      el.loadingInstance = loadingInstance
      el.loadingEl = loadingInstance.$el
    },

    update: function (el, binding) {
      const textExr = el.getAttribute('loading-text')
      if (el.loadingInstance._props.text !== textExr) el.loadingInstance._props.text = textExr
      if (binding.oldValue !== binding.value) el.loadingInstance._props.show = !!binding.value
    },

    unbind: function (el, binding) {
      if (el.domInserted) {
        el.loadingEl && el.loadingEl.parentNode && el.loadingEl.parentNode.removeChild(el.loadingEl)
      }
    },
  })
}

export default SlimLoading
