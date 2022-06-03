import plugin from './datetime_picker.vue'

export default {
  install: function (Vue) {
    Vue.component(plugin.name, plugin)
  }
}