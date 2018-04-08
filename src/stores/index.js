import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        text : "hello world"
    },
    mutations:{
        getText(state,payload){
            state.text = payload
        }
    },
    actions:{
        changText({commit,rootState,dispatch},info){
            commit("getText",info)
        }
    },
    getters:{}
})