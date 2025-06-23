import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Demo from '@/components/Demo.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/demo', component: Demo }
  ]
});
