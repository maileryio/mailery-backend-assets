import 'whatwg-fetch';
import 'bootstrap.native/dist/bootstrap-native-v4';
import Vue from 'vue';
import store from './store';

import App from './components/App.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import SidebarToggler from './components/SidebarToggler.vue';

require('bootstrap-loader/lib/bootstrap.loader?configFilePath=' +
  `${__dirname}/styles/.bootstraprc!bootstrap-loader/no-op.js`);

Vue.component(App.name, App);
Vue.component(Navbar.name, Navbar);
Vue.component(Sidebar.name, Sidebar);
Vue.component(SidebarToggler.name, SidebarToggler);

export default new Vue({ store }).$mount('app');
