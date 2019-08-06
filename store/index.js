import Vue from 'vue';
import Vuex from 'vuex';

import geo from './modules/geo';

Vue.use(Vuex);
const Store = () => new Vuex.Store({
  modules: {
    geo
  },
  actions: {
    async nuxtServerInit({ commit }, { req, app }) {
      {
        const { status, data } = await app.$axios.get('/geo/getPosition');
        console.log(data.city)
        commit('geo/setPosition', status === 200 ? { city: data.city } : { province: '', city: '' })
      }
    }
  }
})
export default Store;