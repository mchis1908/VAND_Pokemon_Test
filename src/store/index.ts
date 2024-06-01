import { createStore } from 'vuex'
import actions from "./actions";

export default createStore({
  state: {
    cartItems: []
  },
  getters: {
  },
  mutations: {
    setCartItems(state, payload) {
      state.cartItems = payload;
    },
    
  },
  actions: actions,
  modules: {
  }
})
