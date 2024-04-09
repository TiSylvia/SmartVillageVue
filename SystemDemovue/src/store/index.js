import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      uname: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).uname
    }
  },
  mutations: {
    login (state, user) {
      console.log('login mutation triggered with user:', user);
      state.user = user;
      window.localStorage.setItem('user', JSON.stringify(user));
      console.log('user state after login mutation:', state.user);
    }
  }
})
