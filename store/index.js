import Vue from 'vue';
import Vuex from 'vuex';

import geo from './modules/geo';

Vue.use(Vuex);
const Store = () => new Vuex.Store({
  modules:{
    geo
  },
  actions:{
    async nuxtServerInit({commit},{req,app}){
      const {status,data} = await app.$axios.get('/geo/getPosition');
      commit('setPosition',status === 200 ? {city:data.city}: {province:'1',city:'2'})
     }
  }
})
export default Store;