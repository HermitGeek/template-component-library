import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'welcome'
      }
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('../views/welcome.vue'),
    }
  ]
});