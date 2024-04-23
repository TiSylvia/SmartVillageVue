import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      uid: '',
      uname: '',
      upassword: '',
      photo: '',
      roleselect: ''
    }
  },
  mutations: {
    login(state, user) {
      console.log('login mutation triggered with user:', user);
      state.user = user;
      window.localStorage.setItem('user', JSON.stringify(user));
      console.log('user state after login mutation:', state.user);
    }
  }
})
