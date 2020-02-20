import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import './styles/index.scss';

Vue.use(BootstrapVue);

export default new Vue({
  el: '#app',
  store,
  components: { App }
});
