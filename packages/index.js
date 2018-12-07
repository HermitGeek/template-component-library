import DatePicker from './components/date-picker'



const version = '0.0.1';
const components = [
  DatePicker
];

/**
 * 定义 install 方法, 外部 Vue.vue() 时自动调用
 * https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
 */

const install = function (Vue) {
  // 全局注册 所有组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version
}

export {
  DatePicker
}
