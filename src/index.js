import Vue from 'vue';
import store from './store';

import App from './components/App.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import SidebarToggler from './components/SidebarToggler.vue';

import BootstrapVue from 'bootstrap-vue';

import './styles/index.scss';
Vue.use(BootstrapVue);

Vue.component(App.name, App);
Vue.component(Navbar.name, Navbar);
Vue.component(Sidebar.name, Sidebar);
Vue.component(SidebarToggler.name, SidebarToggler);

export default new Vue({ store }).$mount('app');
