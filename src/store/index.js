import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

Vue.use(Vuex);

const isProd = process.env.NODE_ENV === 'production';

const store = new Vuex.Store({
  modules,
  strict: !isProd
});

export default store;
