import component from './src/index.vue'



// 全局 注册单个组件
component.install = function (Vue) {
  Vue.component(component.name, component);

  return Vue;
};


export default component
