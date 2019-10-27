import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carShop: [],
    carShopCount: 0,
    viewProduct: {},
    dialogView: false,
    dialogCart: false
  },
  mutations: {
    addCarShop(state, playload) {
      state.carShop.push(playload)
      state.carShopCount++
    },
    removeCarShop(state, playload) {
      const index = state.carShop.indexOf(playload)
      state.carShop.splice(index, 1)
      state.carShopCount--
    },
    viewProduct(state, playload){
      state.viewProduct = playload
      state.dialogView = true
    },
    closeView(state) {
      state.viewProduct = {}
      state.dialogView = false
    },
    viewCartShop(state) {
      state.dialogCart = true
    },
    closeCartShop(state){
      state.dialogCart = false
    }
    
  },
  actions: {
  },
  modules: {
  }
})
