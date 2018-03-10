import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Services from './components/Services.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';

import Project1 from './components/projects/Project1.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/project1', component: Project1 }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0}
  },
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
