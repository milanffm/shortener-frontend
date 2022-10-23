import Vue from 'vue'
import Hammer from 'hammerjs'

Vue.directive('pan', {
  bind (el, binding) {
    if (typeof binding.value === 'function') {
      const mc = new Hammer(el)
      mc.get('pan').set({ direction: Hammer.DIRECTION_ALL })
      mc.on('pan', binding.value)
    }
  }
})
