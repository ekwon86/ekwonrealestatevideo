import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Services from './components/Services.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
