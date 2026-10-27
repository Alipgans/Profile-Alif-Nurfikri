import Vue from 'vue';
import App from './App.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); // [cite: 31, 40]

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');