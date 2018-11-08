import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ColorPicker from './../packages/index';
import hljs from 'highlight.js'
import 'highlight.js/styles/railscasts.css'



Vue.use(ColorPicker);
Vue.config.productionTip = false;
Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
