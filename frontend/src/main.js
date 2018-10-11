import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
});

new Vue({
  render: h => h(App),
}).$mount('#app');
