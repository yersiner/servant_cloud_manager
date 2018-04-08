import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import routes  from './routes/index'
import store from './stores/index'
import App from './App.vue'

const router = new VueRouter({
    routes,
    linkActiveClass : 'active'
})

new Vue({
    el : '#root',
    router,
    store,
    render:h=>h(App)
})

