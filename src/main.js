// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import friendly_url from 'friendly-url';

Vue.config.productionTip = false;

Vue.filter('friendly', function (value) {
  return friendly_url(value);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
